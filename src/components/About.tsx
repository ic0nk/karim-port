import { Phone, Mail, Linkedin } from "lucide-react";
import Image from "next/image";

const About = () => {
return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 h-lvh flex items-center">
        <div className="text-number top-0 right-0 -mt-4 -mr-4 text-gray-200 font-bold text-9xl transform -rotate-90 origin-top-left">
            02
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
            <p className="text-lg text-gray-600 mb-2 tracking-wider">About</p>
            <div className="w-16 h-px bg-gray-400 mb-8" />
            <h2 className="text-4xl font-primary mb-6">CREATIVE DEVELOPMENT</h2>
            <p className="text-base text-gray-700 mb-4">
                I'm Karim Massoud, a media and design student with a strong focus on
                front-end development. I enjoy creating clean, responsive, and
                visually engaging digital experiences that combine creativity with
                functionality.
            </p>
            <p className="text-base text-gray-700 mb-8">
                My goal is to grow into a professional front-end developer, turning
                ideas into impactful designs that connect with people.
            </p>
            <div className="flex items-center space-x-6 mb-8">
                <a href="tel:your-phone-number" className="text-gray-600 hover:text-btn-primary" aria-label="Call me">
                <Phone size={24} />
                </a>
                <a href="mailto:your-email@example.com" className="text-gray-600 hover:text-btn-primary" aria-label="Email me">
                <Mail size={24} />
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-btn-primary" aria-label="My LinkedIn profile">
                <Linkedin size={24} />
                </a>
            </div>
            <button className="btn btn-primary">CONTACT ME</button>
            </div>
            <div className="flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <Image
                src="/assets/image 4.png"
                alt="Karim Massoud"
                width={400}
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
