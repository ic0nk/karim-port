import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between h-lvh">
      <div className="justify-self-start text-center mt-20">
        <h1>PORTFOLIO</h1>
        <h4 className="portfolio-subtitle">KARIM MASSAOUD</h4>
        <div>

        </div>
      </div>
      <div className="w-full">
        <Image
          src="/assets/image 10.png"
          alt="Gallery image"
          width={1920}
          height={1080}
          className="gallery-image"
        />
      </div>
    </section>
  );
};

export default Hero;
