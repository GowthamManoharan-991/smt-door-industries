import * as React from "react";
import classNames from "classnames";

import Section from "../Section";
import { getDataAttrs } from "../../../utils/get-data-attrs";
import ImageBlock from "../../blocks/ImageBlock";
import Action from "../../atoms/Action";

export default function CategoryGridSection(props) {
  const { elementId, items = [], styles = {}, enableAnnotations, heading } = props;

  return (
    <Section
      elementId={elementId}
      className="bg-[#fefefe] sb-category-grid-section px-4 sm:px-6 lg:px-0"
      styles={styles?.self}
      {...getDataAttrs(props)}
    >
      {heading && (
        <div className="mb-14 text-center">
          {heading.eyebrow && (
            <p className="text-sm tracking-[0.15em] uppercase font-extrabold text-[#6B7280] mb-3">
              {heading.eyebrow}
            </p>
          )}

          {heading.title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {heading.title}
            </h2>
          )}

          {heading.subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {heading.subtitle}
            </p>
          )}
        </div>
      )}

      {/* ✅ Mobile always 1 column */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <CategoryCard
            key={index}
            item={item}
            index={index}
            enableAnnotations={enableAnnotations}
          />
        ))}
      </div>
    </Section>
  );
}

function CategoryCard({ item, index, enableAnnotations }) {
  const { title, subtitle, image, actions = [], span = 1, split = false } = item;

  // ✅ Card 1,2,3 should be split in mobile
  const mobileForceSplit = true; // ALL cards in mobile


  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ Only mobile forces split
  const shouldSplit = isMobile ? mobileForceSplit : split;

  return (
    <div
      className={classNames(
        "rounded-xl",
        "p-8",
        "bg-white/80",
        "border border-gray-200",
        "shadow-[0_10px_30px_rgba(0,0,0,0.18)]",

        // ✅ Span should work only from sm and above
        span === 2 && "sm:col-span-2",
        span === 3 && "sm:col-span-3",
        span === 4 && "sm:col-span-4"
      )}
      // ✅ IMPORTANT: remove inline gridColumn span
      {...(enableAnnotations && { "data-sb-field-path": `.items.${index}` })}
    >
      {shouldSplit ? (
        <SplitLayout title={title} subtitle={subtitle} image={image} actions={actions} />
      ) : (
        <NormalLayout title={title} subtitle={subtitle} image={image} actions={actions} />
      )}
    </div>
  );
}

/* SPLIT LAYOUT */
function SplitLayout({ title, subtitle, image, actions }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex-1">
        {title && <h3 className="text-2xl font-semibold mt-2">{title}</h3>}
        {subtitle && <p className="text-sm mt-1">{subtitle}</p>}

        {actions?.length > 0 && (
          <div className="mt-6 flex gap-4">
            {actions.map((action, i) => (
              <Action
                key={i}
                {...action}
                label={`${action.label} →`}
                className="
                  group inline-flex items-center gap-3
                  px-6 py-2.5
                  rounded-[10px]
                  bg-white/80
                  border border-white/20
                  text-[#4A4A4A] text-[15px] font-medium
                  backdrop-blur-md
                  shadow-lg shadow-black/30
                  hover:bg-white/15 hover:border-white/40
                  transition-all duration-300
                "
              >
                <span>{action.label || "Learn More"} →</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                  />
                </svg>
              </Action>
            ))}
          </div>
        )}
      </div>

      {image?.url && (
        <div className="flex-1 flex justify-end" style={{ maxWidth: "140px" }}>
          <ImageBlock
            {...image}
            styles={{
              self: { width: "100%" },
            }}
          />
        </div>
      )}
    </div>
  );
}

/* NORMAL LAYOUT */
function NormalLayout({ title, subtitle, image, actions }) {
  return (
    <div className="text-center">
      {image?.url && (
        <div className="mx-auto" style={{ maxWidth: "70px" }}>
          <ImageBlock
            {...image}
            styles={{
              self: {
                width: "100%",
                height: "auto",
              },
            }}
          />
        </div>
      )}

      {title && <h3 className="text-xl font-semibold mt-4">{title}</h3>}
      {subtitle && <p className="mt-1">{subtitle}</p>}

      {actions?.length > 0 && (
        <div className="mt-4 flex justify-center gap-4">
          {actions.map((action, i) => (
            <Action
              key={i}
              {...action}
              label={`${action.label} →`}
              className="
                group inline-flex items-center gap-3
                px-6 py-2.5
                rounded-[10px]
                bg-white/80
                border border-white/20
                text-[#4A4A4A] text-[15px] font-medium
                backdrop-blur-md
                shadow-lg shadow-black/30
                hover:bg-white/15 hover:border-white/40
                transition-all duration-300
              "
            >
              <span>{action.label || "Learn More"} →</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                />
              </svg>
            </Action>
          ))}
        </div>
      )}
    </div>
  );
}
