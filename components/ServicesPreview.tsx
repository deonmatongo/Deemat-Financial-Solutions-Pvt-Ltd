"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import Reveal from "./Reveal";

/** Home-page overview of the four service pillars, linking through to /services. */
export default function ServicesPreview() {
  return (
    <section className="section bg-mist">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-burgundy" />
              What we do
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-onyx sm:text-4xl">
              Four disciplines, one integrated finance partner.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy-dark"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href="/services"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-onyx/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-burgundy transition-transform duration-300 group-hover:scale-x-100" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-onyx">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-brand/80">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-burgundy opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
