"use client";
import Image from "next/image";

export default function ProductTeak(props: any) {
  const {
    products = [],
    background = "white",
    enableAnnotations,
    __metadata
  } = props;

  return (
    <section
      className={`relative w-full overflow-hidden ${
        background === "white" ? "bg-white" : "bg-gray-100"
      }
      min-h-fit md:min-h-[50vh] flex items-center`}
      {...(enableAnnotations && {
        "data-sb-object-id": __metadata?.id
      })}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

          {products.map((product: any, index: number) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >
              {/* Glow */}
              <div className="absolute w-[200px] h-[200px] bg-black/5 rounded-full blur-3xl" />

              {/* Door Image */}
              <Image
                src={product.image}
                alt={product.model || "Door Model"}
                width={320}
                height={560}
                className="relative z-10 drop-shadow-2xl"
              />

              {/* Floor Shadow */}
              <div className="absolute bottom-8 w-[160px] h-[22px] bg-black/10 blur-xl rounded-full" />

              {/* Model Number */}
              <p className="mt-2 text-base md:text-lg font-semibold text-gray-800">
                {product.model}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
