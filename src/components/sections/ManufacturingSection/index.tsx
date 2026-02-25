"use client";

import React from "react";
import classNames from "classnames";
import {
  TreePine,
  Factory,
  Settings,
  Wind,
  Axe,
} from "lucide-react";

const ICONS: Record<string, any> = {
  tree: TreePine,
  saw: Axe,
  wind: Wind,
  settings: Settings,
  factory: Factory,
};

type TimelineStep = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  image?: string;
  highlight?: boolean;
};

type TimberTimelineProps = {
  eyebrow?: {
    text: string;
  };
  heading?: {
    text: string;
  };
  subheading?: {
    text: string;
  };
  timeline?: {
    steps: TimelineStep[];
  };
  proofBar?: {
    enabled?: boolean;
    items?: { label: string; value: string }[];
  };
};

export default function TimberTimelineSection({
  eyebrow,
  heading,
  subheading,
  timeline,
  proofBar,
}: TimberTimelineProps) {
  if (!timeline?.steps?.length) return null;

  return (
    <section className="relative bg-[#1c1a17] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          {/* Eyebrow */}
          {eyebrow?.text && (
            <div
              className="
                mb-3
                text-xs sm:text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                sm:tracking-[0.25em]
                lg:tracking-[0.35em]
              "
              style={{ color: "#F59E0B" }}
            >
              {eyebrow.text}
            </div>
          )}

          {/* Main Heading */}
          {heading?.text && (
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              {heading.text}
            </h2>
          )}

          {/* Subheading */}
          {subheading?.text && (
            <p className="text-lg text-gray-300">
              {subheading.text}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="flex flex-col lg:flex-row items-center justify-between">

          {timeline.steps.map((step, index) => {
            const Icon = step.icon ? ICONS[step.icon] : null;

            return (
              <React.Fragment key={step.id}>

                {/* Step Card */}
                <div
                  className={classNames(
                    "flex-1 text-center px-6",
                    step.highlight &&
                      "ring-1 ring-amber-500/40 rounded-xl py-6"
                  )}
                >
                  {/* Icon */}
                  {Icon && (
                    <div className="flex justify-center mb-4">
                      <Icon className="w-10 h-10 text-amber-400" />
                    </div>
                  )}

                  {/* Image */}
                  {step.image && (
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  )}

                  {/* Step Number */}
                  <div className="text-amber-500 font-mono text-sm mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-1">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  {step.subtitle && (
                    <p className="text-sm text-gray-400">
                      {step.subtitle}
                    </p>
                  )}
                </div>

                {/* Arrow (Desktop) */}
                {index < timeline.steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center mx-4">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path
                        d="M0 10H36M36 10L28 2M36 10L28 18"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}

                {/* Arrow (Mobile) */}
                {index < timeline.steps.length - 1 && (
                  <div className="flex lg:hidden justify-center my-6">
                    <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                      <path
                        d="M10 0V36M10 36L2 28M10 36L18 28"
                        stroke="#F59E0B"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* Proof Bar */}
        {proofBar?.enabled && proofBar.items?.length && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {proofBar.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-black/40 rounded-xl p-6 border border-white/10"
              >
                <div className="text-2xl font-semibold text-amber-500 mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
