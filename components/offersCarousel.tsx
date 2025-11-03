import { useCallback, useEffect, useState } from "react";
import { offers } from "./offers";
import { CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";

function OffersCarousel() {
  const phone = "51903565918";
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Función reutilizable para generar el enlace de WhatsApp
  const getWhatsAppUrl = (message: string) =>
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

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
      <div className="hidden md:flex justify-center items-center gap-6 lg:gap-12 p-4 mt-8 xl:mt-4 2xl:mt-10">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="h-full bg-white p-4 lg:p-6 flex flex-col justify-between rounded-[40px] shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff] lg:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
          >
            <div className="h-30 lg:h-20 flex flex-col gap-1">
              <h2 className="text-lg 2xl:text-xl font-bold text-center">
                {offer.title}
              </h2>
              <h3 className="text-center text-base">{offer.subtitle}</h3>
            </div>

            <div className="h-70 lg:h-60 justify-between">
              <p className="text-2xl 2xl:text-3xl text-center font-bold text-blue-600 mb-2">
                {offer.price}
              </p>
              <p className="text-sm text-green-600 text-center font-medium mb-4">
                {offer.highlight}
              </p>

              <ul className="space-y-1 2xl:space-y-2 text-sm">
                {offer.details.map((detail, i) => (
                  <li key={i} className="flex items-start sm:items-center">
                    <span className="mr-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-30 flex justify-center items-center">
              <div>
                {offer.gift}
                <span className="relative bottom-6 lg:bottom-7">
                  {offer.image}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-center text-gray-500">{offer.note}</p>
              <a
                href={getWhatsAppUrl(offer.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Chatea sobre ${offer.title} por WhatsApp`}
                aria-label={`Abrir chat de WhatsApp para ${offer.title}`}
                className="w-full"
              >
                <button className="w-full py-2 2xl:py-3 rounded-full bg-[#1F01B9] text-base 2xl:text-lg font-semibold text-white transition-colors hover:bg-[#391FB6] cursor-pointer">
                  Solicitar ahora
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="block md:hidden relative">
        <div className="overflow-hidden py-8" ref={emblaRef}>
          <div className="flex">
            {offers.map((offer) => (
              <div key={offer.id} className="flex-[0_0_80%] min-w-0 pl-5 pr-5">
                <div className="h-full bg-white flex flex-col justify-between rounded-[40px] p-4 shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] w-full will-change-transform">
                  <div className="h-24 flex flex-col gap-1">
                    <h2 className="text-lg font-bold text-center">
                      {offer.title}
                    </h2>
                    <h3 className="text-sm text-center">{offer.subtitle}</h3>
                  </div>

                  <div className="h-70 justify-between">
                    <div>
                      <p className="text-3xl text-center font-bold text-blue-600 mb-2">
                        {offer.price}
                      </p>
                      <p className="text-sm text-green-600 text-center font-medium mb-3">
                        {offer.highlight}
                      </p>
                      <ul className="text-sm">
                        {offer.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1">
                              <CheckCircle className="w-3 h-3 text-blue-600" />
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full h-16 flex justify-center items-center">
                    <div className="pb-6">
                      {offer.gift}
                      <span className="relative bottom-6">{offer.image}</span>
                    </div>
                  </div>

                  <div className="w-full h-20 flex flex-col gap-2">
                    <p className="text-xs text-center text-gray-500">
                      {offer.note}
                    </p>

                    <a
                      href={getWhatsAppUrl(offer.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Chatea sobre ${offer.title} por WhatsApp`}
                      aria-label={`Abrir chat de WhatsApp para ${offer.title}`}
                      className="w-full"
                    >
                      <button className="w-full px-12 py-3 rounded-full bg-[#1F01B9] text-base font-semibold text-white transition-colors hover:bg-[#391FB6] cursor-pointer">
                        Solicitar ahora
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Puntos indicadores (solo móvil) */}
        <div className="flex justify-center gap-2 -mt-2">
          {offers.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={clsx(
                "w-2 h-2 rounded-full transition-all",
                i === selectedIndex ? "bg-[#1F01B9] w-4" : "bg-gray-300"
              )}
              aria-label={`Ir a oferta ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OffersCarousel;
