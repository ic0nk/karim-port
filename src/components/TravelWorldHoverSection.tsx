import Image from "next/image";

export default function TravelWorldHoverSection() {
  const tiles = [
    {
      title: "Luxury Beach Getaways",
      subtitle: "Warm sands, calm seas",
      img: "/assets/travelworld_laptop_4k_transparent_crisp 1.png",
    },
    {
      title: "Mountain Adventures",
      subtitle: "Fresh air, scenic trails",
      img: "/assets/Travel World Second Section .png",
    },
    {
      title: "Cruise Experiences",
      subtitle: "Sail in style",
      img: "/assets/Travel World Second Section .png",
    },
  ];

  return (
    <section className="reveal-section py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-150 border-b mb-6" />
        <h2 className="text-[var(--text)] font-primary text-3xl md:text-4xl mb-8">
          Explore by hovering
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-md bg-[var(--background)]"
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* hover veil */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* content */}
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <div>
                  <p className="text-white/90 text-xs">{t.subtitle}</p>
                  <h3 className="text-white font-semibold text-lg leading-tight">{t.title}</h3>
                </div>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[var(--accent)] font-bold shadow">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[var(--secondary-text)] text-sm mt-4">Hover the cards to reveal details.</p>
      </div>
    </section>
  );
}
