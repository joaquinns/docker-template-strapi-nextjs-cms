import Image from "next/image";
import SectionHeader from "./section-headers";

export const DamasHero = () => {
  return (
    <section className="relative h-[40vh] w-full">
      <div className="absolute inset-0">
        <Image
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
          priority
          src="/damashero.jpg"
          alt="Beautiful flower arrangement"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <SectionHeader
          title="Flores u Obsequios para Damas"
          align="center"
          color="text-slate-100"
        />
      </div>
    </section>
  );
};
