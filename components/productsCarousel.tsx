import { BadgeCheckIcon } from "lucide-react";
import { Products } from "./products";
import { formatPrice } from "./utils/formatters";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

function PresentationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 px-6 gap-6 md:gap-12 mt-8 2xl:mt-10">
        {Products.map((product, i) => (
          <div
            key={i}
            className="group w-full h-auto flex items-center text-center rounded-[40px] bg-white overflow-hidden md:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
          >
            {/* Imagen con efecto de zoom */}
            <div className="overflow-hidden">
              <div className="transition-transform duration-700 ease-out lg:group-hover:scale-135">
                {product.image}
              </div>
            </div>

            {/* Texto */}
            <div className="p-4 w-2/3 h-full flex flex-col justify-between">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg sm:text-2xl text-start font-semibold text-[#1F01B9]">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-start text-sm sm:text-base mb-4">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="text-xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-blue-500 text-white dark:bg-blue-600"
                >
                  <BadgeCheckIcon />
                  {product.amount}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="block md:hidden relative">
        <div className="overflow-hidden py-8" ref={emblaRef}>
          <div className="flex">
            {Products.map((product, i) => (
              <div key={i} className="flex-[0_0_80%] min-w-0 pl-5 pr-5">
                <div className="group h-auto flex flex-col text-start rounded-[40px] bg-white overflow-hidden shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] w-full will-change-transform">
                  {/* Imagen */}
                  <div className="overflow-hidden rounded-t-[40px] flex-1">
                    <div className="transition-transform duration-500 ease-out">
                      {product.image}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="flex flex-col items-start gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-[#1F01B9]">
                        {product.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-xl font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white text-sm"
                      >
                        <BadgeCheckIcon className="w-3 h-3 mr-1" />
                        {product.amount}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Puntos indicadores (solo móvil) - usa el mismo código que ofertas */}
        <div className="flex justify-center gap-2 -mt-2">
          {Products.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                i === selectedIndex ? "bg-[#1F01B9] w-4" : "bg-gray-300"
              )}
              aria-label={`Ir a producto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PresentationsCarousel;
