import Image from "next/image";
import SectionHeader from "./components/section-headers";

export const About = () => {
  return (
    <section className="min-h-screen w-full max-w-6xl mx-auto px-4 xl:px-0 my-8">
      <div className="flex flex-col md:flex-row w-full gap-4 h-full">
        <Image
          width={600}
          height={550}
          className="object-cover object-center w-[400px] mx-auto h-auto lg:w-full lg:h-[550px] rounded "
          src="/heroflowers.jpg"
          alt="About image"
        />
        <div className="flex flex-col justify-center px-4">
          <SectionHeader
            title="Quienes Somos?"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum delectus rerum molestias assumenda temporibus labore minus debitis nam voluptatem? Ratione!"
            align="center"
          />
        </div>
      </div>
    </section>
  );
};
