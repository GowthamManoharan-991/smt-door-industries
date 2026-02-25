"use client";

import React from "react";
import classNames from "classnames";
import {
  Factory,
  Settings,
  Wind,
} from "lucide-react";

const ICONS: Record<string, any> = {
  factory: Factory,
  settings: Settings,
  wind: Wind,
};

type TimelineStep = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  image?: string;
  highlight?: boolean;
};

type DoorInstallationProps = {
  eyebrow?: { text: string };
  heading?: { text: string };
  subheading?: { text: string };
  timeline?: { steps: TimelineStep[] };
};

export default function DoorInstallationProcess({
  eyebrow,
  heading,
  subheading,
  timeline,
}: DoorInstallationProps) {
  if (!timeline?.steps?.length) return null;

  return (
    <section className="relative bg-white text-gray-900 py-12 lg:py-20">
      <div className="container mx-auto px-8 sm:px-4 lg:px-24">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          {eyebrow?.text && (
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              {eyebrow.text}
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900">
            Our Door Installation Process
          </h2>

          {subheading?.text && (
            <p className="text-lg text-gray-600">
              From factory finishing to flawless installation at your home
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
                    "flex-1 text-center px-6 py-6",
                    step.highlight &&
                      "ring-1 ring-gray-600 rounded-xl"
                  )}
                >
                  {/* Icon */}
                  {Icon && (
                    <div className="flex justify-center mb-4">
                      <Icon className="w-10 h-10 text-gray-600" />
                    </div>
                  )}

                  {/* Step Number */}
                  <div className="text-gray-600 font-mono text-sm mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">
                    {step.title}
                  </h3>
                  
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

                  {/* Subtitle */}
                  {step.subtitle && (
                    <p className="text-sm text-gray-800">
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
                        stroke="#4B5563"
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
                        stroke="#78808A"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}