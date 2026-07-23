"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Tag = "div" | "section" | "li" | "article" | "span";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds before the transition begins. */
  delay?: number;
  className?: string;
  as?: Tag;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
};

/**
 * Scroll-triggered fade + rise using a native IntersectionObserver + CSS
 * (no animation library). Fires once, then disconnects. Respects
 * prefers-reduced-motion via globals.css. If IO is unavailable, content is
 * shown immediately.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  const mergedStyle: React.CSSProperties = {
    ...(delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : {}),
    ...style,
  };
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Wraps children and staggers each direct child's reveal by `stagger` seconds.
 * Children should be <Reveal> elements; their delay is offset by index.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const childDelay = (child.props as { delay?: number }).delay ?? 0;
        return cloneElement(child as React.ReactElement<{ delay?: number }>, {
          delay: childDelay + i * stagger,
        });
      })}
    </div>
  );
}
