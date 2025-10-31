"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Briefcase, Tag, Sparkles } from "lucide-react";
import SoftNoiseWebGL from "./SoftNoiseWebGL";

type Theme = {
	id: number;
	title: string;
	images: string[];
};
// Themes used in the "Trip Themes" section carousel
const themes: Theme[] = [
	{
		id: 1,
		title: "Luxury Beach Getaways",
		images: [
			"/assets/travelworld_laptop_4k_transparent_crisp 1.png",
			"/assets/Travel World Second Section .png",
		],
	},
	{
		id: 2,
		title: "Mountain Adventures",
		images: [
			"/assets/Travel World Second Section .png",
			"/assets/travelworld_laptop_4k_transparent_crisp 1.png",
		],
	},
	{
		id: 3,
		title: "Luxury Cruise Experiences",
		images: [
			"/assets/travelworld_laptop_4k_transparent_crisp 1.png",
			"/assets/Travel World Second Section .png",
		],
	},
];

export default function ProjectDetails() {
	const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const currentTheme = themes[currentThemeIndex];
	const currentImage = currentTheme.images[currentImageIndex];

	const handlePrevTheme = () => {
		setCurrentThemeIndex((i) => (i - 1 + themes.length) % themes.length);
		setCurrentImageIndex(0);
	};


	const handleNextTheme = () => {
		setCurrentThemeIndex((i) => (i + 1) % themes.length);
		setCurrentImageIndex(0);
	};

	return (
		<main className="relative overflow-x-hidden">
			{/* Hover section - editorial layout with interactive mockup (designed like the reference) [Moved to top as first section] */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
						{/* Left: Title + copy */}
						<div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
							<h2 className="font-primary text-4xl md:text-6xl tracking-wide text-[var(--text)]">TRAVELWORLD</h2>
							<div className="w-44 h-px bg-[var(--secondary-text)]/50 mt-2 mb-5" />
							<p className="text-[var(--secondary-text)] max-w-xs leading-relaxed">
								A simple, friendly travel website that
								makes exploring destinations feel fun and
								effortless.
							</p>
						</div>

						{/* Right: Interactive laptop mockup */}
						<div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
							<div className="relative mx-auto max-w-3xl">
								{/* hover glow */}
								<div className="absolute -inset-8 bg-[var(--accent)]/15 blur-3xl rounded-[2rem] opacity-0 group/hover:hover:opacity-100 transition" aria-hidden="true" />

								{/* Mockup container */}
								<div className="group relative rounded-3xl border border-white/10 bg-[var(--Secondary-Background)]/60 backdrop-blur-md shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
									<div className="relative w-full aspect-[16/9]">
										<Image
											src="/assets/travelworld_laptop_4k_transparent_crisp 1.png"
											alt="Travel World laptop mockup"
											fill
											priority
											sizes="(max-width: 1024px) 100vw, 60vw"
											className="object-contain"
										/>
									</div>

									{/* Subtle overlay + CTA on hover */}
									<div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
									<div className="absolute bottom-4 right-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
										<a
											href="https://travel-website-complete-w0th.onrender.com/index.html"
											target="_blank"
											rel="noopener noreferrer"
											className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white text-[var(--accent)] shadow hover:shadow-md"
										>
											<ExternalLink size={16} />
											View Live
											</a>
									</div>
								</div>

								{/* laptop base highlight */}
								<div className="mx-auto mt-5 h-2 w-10/12 rounded-full bg-black/10 blur-[2px]" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Overview */}
			<section className="reveal-section relative py-16 md:py-20">
				{/* Subtle WebGL ambiance */}
				<SoftNoiseWebGL className="pointer-events-none absolute inset-0 -z-10 opacity-25" />
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">
					02
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section header */}
					<div className="mb-8">
						<p className="text-[11px] tracking-[0.18em] text-[var(--secondary-text)] uppercase">Section 02</p>
						<h2 className="mt-2 text-[var(--text)] font-primary text-4xl md:text-5xl leading-tight tracking-wide">Overview</h2>
						<div className="mt-4 h-px w-full bg-white/10" />
					</div>

					<div className="grid grid-cols-12 gap-8 items-start">
						{/* Left: copy + quick facts */}
						<div className="col-span-12 lg:col-span-6 space-y-6">
							{/* Quick facts as icon cards */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="reveal-el rounded-2xl border border-white/10 bg-[var(--background)]/60 backdrop-blur-md p-4 flex items-start gap-3">
									<div className="mt-0.5 rounded-md p-1.5 bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Briefcase size={16} /></div>
									<div>
										<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-1">ROLE</p>
										<p className="text-[var(--text)] font-semibold">UX/UI Design & Front-end</p>
									</div>
								</div>
								<div className="reveal-el rounded-2xl border border-white/10 bg-[var(--background)]/60 backdrop-blur-md p-4 flex items-start gap-3">
									<div className="mt-0.5 rounded-md p-1.5 bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Tag size={16} /></div>
									<div>
										<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-1">TYPE</p>
										<p className="text-[var(--text)] font-semibold">Marketing Website (Travel)</p>
									</div>
								</div>
							</div>

							{/* Highlights as pills */}
							<div className="reveal-el rounded-2xl border border-white/10 bg-[var(--background)]/60 backdrop-blur-md p-4">
								<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-2">HIGHLIGHTS</p>
								<div className="flex flex-wrap gap-2">
									<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Sparkles size={14} /> Destination cards</span>
									<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Sparkles size={14} /> Special offers</span>
									<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Sparkles size={14} /> Testimonials</span>
									<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs bg-[var(--Secondary-Background)]/70 border border-white/10 text-[var(--text)]"><Sparkles size={14} /> Clear CTAs</span>
								</div>
							</div>

							{/* Live Demo CTA */}
							<div className="reveal-el pt-2">
								<a
									href="https://travel-website-complete-w0th.onrender.com/index.html"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] text-white px-6 py-3 font-semibold shadow-lg hover:bg-[var(--accent-hover)] transition"
								>
									<ExternalLink size={18} />
									<span>Live Demo</span>
								</a>
								<p className="text-[11px] text-[var(--secondary-text)] mt-2">Opens in a new tab</p>
							</div>
						</div>

						{/* Right: video card */}
						<div className="col-span-12 lg:col-span-6">
							<div className="relative group max-w-xl lg:ml-auto">
								<div className="absolute -inset-6 bg-[var(--accent)]/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
								<div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl pop-on-scroll bg-[var(--background)]">
									<div className="relative w-full aspect-[16/9]">
										<video
											className="absolute inset-0 h-full w-full object-cover"
											src="https://videos.pexels.com/video-files/856988/856988-hd_1280_720_25fps.mp4"
											poster="/assets/Travel World Second Section .png"
											playsInline
											muted
											autoPlay
											loop
											preload="metadata"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
				</section>

			{/* Key Screens - editorial block */}
			{/* Editorial block: big image + text columns — placed in its own section (no background) */}
			<section className="reveal-section relative py-16 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
						<div className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10">
							<Image src="/assets/Travel World Project Background .png" alt="Travel World" width={1400} height={900} className="w-full h-auto" />
						</div>
						<div className="col-span-12 lg:col-span-5 lg:pl-4">
							<p className="text-sm text-[var(--secondary-text)] mb-2">Overview</p>
							<h3 className="font-primary text-3xl text-[var(--text)] mb-4">A friendly travel experience</h3>
							<p className="text-[var(--text)]/90 leading-relaxed mb-3">
								A simple, friendly travel website that makes exploring destinations feel fun and effortless.
							</p>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
								<li><span className="font-semibold">Role:</span> UX/UI Design & Front-end</li>
								<li><span className="font-semibold">Type:</span> Marketing Website (Travel)</li>
								<li className="sm:col-span-2"><span className="font-semibold">Highlights:</span> Destination cards, special offers, testimonials, clear CTAs</li>
							</ul>
							<div className="mt-5">
								<a
									href="https://travel-website-complete-w0th.onrender.com/index.html"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--accent-hover)] transition shadow-md"
								>
									<ExternalLink size={16} />
									<span>Open Live Demo</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Screens - supporting content (keeps band background) */}
			<section className="reveal-section mt-20 md:mt-24 relative w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)] py-16 lg:py-20 mb-16 md:mb-24">
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">
					03
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
					{/* (Editorial block moved to its own non-banded section above) */}

					{/* Pull quote */}
					<div className="text-center py-10">
						<p className="font-primary italic text-3xl md:text-5xl leading-snug text-[var(--text)]">
							“Make exploring destinations fun and effortless.”
						</p>
					</div>

					{/* What I did & Focus */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						<div>
							<h4 className="font-primary italic text-xl text-[var(--text)] mb-3">What I did</h4>
							<ul className="space-y-2 text-sm text-[var(--secondary-text)]">
								<li>Designed reusable destination cards with clear hierarchy.</li>
								<li>Structured special offers with strong visual focus.</li>
								<li>Clear CTAs and consistent spacing rhythm.</li>
							</ul>
						</div>
						<div>
							<h4 className="font-primary italic text-xl text-[var(--text)] mb-3">Focus</h4>
							<ul className="space-y-2 text-sm text-[var(--secondary-text)]">
								<li>Editorial layout with alternating bands.</li>
								<li>Better readability in both light and dark mode.</li>
								<li>Soft motion with no hydration issues.</li>
							</ul>
						</div>
					</div>

					{/* Image strip */}
					<div className="grid grid-cols-12 gap-6 mt-12">
						<div className="col-span-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10">
							<Image src="/assets/travelworld_laptop_4k_transparent_crisp 1.png" alt="Laptop mockup" width={1600} height={900} className="w-full h-auto" />
						</div>
						<div className="col-span-12 md:col-span-6 rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 border border-white/10">
							<Image src="/assets/Travel World Second Section .png" alt="Section" width={1200} height={700} className="w-full h-auto" />
						</div>
						<div className="col-span-12 md:col-span-6 rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 border border-white/10">
							<Image src="/assets/Travel World Second Section .png" alt="Section Alt" width={1200} height={700} className="w-full h-auto" />
						</div>
					</div>
				</div>
			</section>

			{/* Trip Themes - editorial band with dual images */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 py-16 md:py-20">
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">04</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-10 reveal-el">TRIP THEMES</h2>

					<div className="relative flex items-center justify-center gap-8">
						{/* Arrows positioned like a carousel */}
						<button
							onClick={handlePrevTheme}
							aria-label="Previous theme"
							className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--Secondary-Background)]/60 hover:bg-[var(--Secondary-Background)] text-[var(--text)] shadow"
						>
							<ChevronLeft size={28} />
						</button>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
							<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10 pop-on-scroll">
								<Image src={currentImage} alt={`${currentTheme.title} - Image ${currentImageIndex + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
							</div>
							<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10 pop-on-scroll">
								<Image
									src={currentTheme.images[(currentImageIndex + 1) % currentTheme.images.length]}
									alt={`${currentTheme.title} - Image ${((currentImageIndex + 1) % currentTheme.images.length) + 1}`}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>

						<button
							onClick={handleNextTheme}
							aria-label="Next theme"
							className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--Secondary-Background)]/60 hover:bg-[var(--Secondary-Background)] text-[var(--text)] shadow"
						>
							<ChevronRight size={28} />
						</button>
					</div>

					<p className="text-center text-sm text-[var(--secondary-text)] mt-4">{currentTheme.title}</p>
					<p className="text-center text-xs text-[var(--secondary-text)] mt-2">
						Swipe to preview: {themes.map((t) => t.title).join(", ")}. 
					</p>
				</div>
			</section>

			{/* Special Offers - card list */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-20">
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">05</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-sm text-[var(--secondary-text)] mb-4">
						Take advantage of our limited-time deals and save on your next adventure.
					</p>
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-8">SPECIAL OFFERS</h2>

					<div className="rounded-3xl bg-[color:rgba(142,197,255,0.12)] dark:bg-[color:rgba(31,120,172,0.18)] border border-white/10 shadow-xl p-6 md:p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Card 1 */}
							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 25%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Summer Escape to Bali</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">
									7 nights at a luxury beachfront resort with daily breakfast and transfers.
								</p>
								<div className="mt-4 text-sm">
									<span className="line-through opacity-70 mr-2">$1,199</span>
									<span className="font-bold">$899</span>
								</div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">
									Book Now
								</button>
							</div>

							{/* Card 2 */}
							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 20%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Romantic Paris Getaway</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">
									5 nights near the Eiffel Tower with Seine cruise and museum passes.
								</p>
								<div className="mt-4 text-sm">
									<span className="line-through opacity-70 mr-2">$1,349</span>
									<span className="font-bold">$1,079</span>
								</div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">
									Book Now
								</button>
							</div>

							{/* Card 3 */}
							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 30%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Greek Island Hopping</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">
									10-day adventure through the Cyclades with transfers and guided tours.
								</p>
								<div className="mt-4 text-sm">
									<span className="line-through opacity-70 mr-2">$1,899</span>
									<span className="font-bold">$1,329</span>
								</div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">
									Book Now
								</button>
							</div>
						</div>
						<p className="text-[var(--secondary-text)] text-sm mt-4">Limited-time deals to save on your next adventure.</p>
					</div>
				</div>
			</section>

			{/* CTA Section - dark band to echo hero */}
			<section className="reveal-section relative py-16 md:py-20 w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)]">
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">07</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<p className="text-sm text-[var(--secondary-text)] mb-4">
						Choose a destination below — the live website or the design file
					</p>
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-12 reveal-el">
						WHERE DO YOU WANT TO OPEN TRAVEL WORLD?
					</h2>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						{/* Visit Website Button */}
						<a
							href="https://travel-website-complete-w0th.onrender.com/index.html"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 bg-[var(--accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition shadow-lg pop-on-scroll"
						>
							<span className="text-2xl">🔗</span>
							<span>VISIT WEBSITE</span>
							<span className="ml-2 bg-white text-[var(--accent)] px-3 py-1 rounded-full text-sm font-semibold">Open Site</span>
						</a>

						{/* View Figma Button */}
						<a
							href="https://www.figma.com/design/rzN9N9qsHKqxYUwQpsEwfn/Untitled?node-id=0-1&p=f&t=aGmk5l4FXR8dXmtn-0"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 bg-[var(--accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition shadow-lg pop-on-scroll"
						>
							
							<span className="text-2xl">🎨</span>
							<span>VIEW FIGMA</span>
							<span className="ml-2 bg-white text-[var(--accent)] px-3 py-1 rounded-full text-sm font-semibold">Open File</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
