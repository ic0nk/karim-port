import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import Image from "next/image";

const About = () => {
return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 h-lvh flex items-center overflow-hidden">
        <div className="text-number absolute top-20 right-2 text-[var(--secondary-text)] text- 1x1 transform -rotate-270 origin-top-left pointer-events-none select-none" aria-hidden>
            02
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <div>
                    <h4 className="mb-2 text-right body-text-b">About</h4>
                    <div className="w-153 h-px bg-[var(--secondary-text)] opacity-50 mb-2" />
                    <h3 className="font-primary mb-6">CREATIVE DEVELOPMENT</h3>
                </div>
                <div className="min-h-[268px]">
                    <p className="text-base text-gray-700 mb-4 align-middle">
                        I’m Karim Massaoud, a media and design student with a strong focus on front-end development. I enjoy creating clean, responsive, and visually engaging digital experiences that combine creativity with functionality. <br />
                        My goal is to grow into a professional front-end developer, turning ideas into impactful designs that connect with people. <br />
                    </p>
               
                </div>
                <div className="flex items-center space-x-6 justify-between">
                    <div className="flex gap-6">
                        <a href="tel:0616537940" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="Call me">
                        <MdLocalPhone size={24} />
                        </a>
                        <a href="karimmassoud668@gmail.com" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="Email me">
                        <IoMdMail size={24} />
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-btn-primary icon-link" aria-label="My LinkedIn profile">
                        <FaLinkedin size={24} />
                        </a>
                    </div>
                    <div>
                    <a href="#contact">
                        <button className="btn btn-primary">CONTACT ME</button>
                    </a>
                    </div>
                </div>
                
                </div>
                <div className="flex justify-center">
                    <div className="bg-[var(--Secondary-Background)] p-4 rounded-lg shadow-lg">
                        <Image
                        src="/assets/image 4.png"
                        alt="Karim Massoud"
                        width={350}
                        height={500}
                        className="rounded-lg"
                        />
                </div>
            </div>
        </div>
    </section>
);
};

export default About;
