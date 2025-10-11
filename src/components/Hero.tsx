import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-between h-lvh">
      <div className="justify-self-start text-center mt-40">
        <h1>PORTFOLIO</h1>
        <h4 className="portfolio-subtitle">KARIM MASSAOUD</h4>
        <div className="flex justify-center gap-4 mt-8">
          <button className="btn btn-primary">
            My Projects
          </button>
          <button className="btn btn-secondary">
            Contact Me
          </button>
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
