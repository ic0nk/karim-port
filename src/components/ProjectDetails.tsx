"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const themes = [
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
	const showcaseRef = useRef<HTMLDivElement | null>(null);


	// Featured destinations for the "Key Screens" section
	const destinations = [
		{
			region: "Asia",
			title: "Bali, Indonesia",
			price: "$899",
			image: "/assets/Triple Wave Project Background .png",
			blurb:
				"Experience the perfect blend of beautiful beaches, vibrant culture, and spiritual retreats.",
		},
		{
			region: "Europe",
			title: "Paris, France",
			price: "$1,099",
			image: "/assets/Travel World Project Background .png",
			blurb:
				"Discover the city of love with its iconic landmarks, world-class cuisine, and artistic heritage.",
		},
		{
			region: "Europe",
			title: "Santorini, Greece",
			price: "$1,299",
			image: "/assets/Owen Bryce Project Background .png",
			blurb:
				"Enjoy breathtaking sunsets, white-washed buildings, and crystal-clear waters on this magical island.",
		},
	];

	const handlePrevTheme = () => {
		setCurrentThemeIndex((prev) => (prev === 0 ? themes.length - 1 : prev - 1));
		setCurrentImageIndex(0);
	};

	const handleNextTheme = () => {
		setCurrentThemeIndex((prev) => (prev === themes.length - 1 ? 0 : prev + 1));
		setCurrentImageIndex(0);
	};

	const handlePrevImage = () => {
		const currentTheme = themes[currentThemeIndex];
		setCurrentImageIndex((prev) =>
			prev === 0 ? currentTheme.images.length - 1 : prev - 1
		);
	};

	const handleNextImage = () => {
		const currentTheme = themes[currentThemeIndex];
		setCurrentImageIndex((prev) =>
			prev === currentTheme.images.length - 1 ? 0 : prev + 1
		);
	};

	const currentTheme = themes[currentThemeIndex];
	const currentImage = currentTheme.images[currentImageIndex];
	return (
		<main className="">
			{/* Studio Hero (full-bleed dark stage) */}
			<section className="studio-hero relative w-screen left-1/2 -translate-x-1/2 py-12 md:py-16">
				{/* Background removed per request */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[68vh] relative">
					{/* Left copy */}
					<div className="text-left relative z-10 lg:col-span-5">
					<p className="text-xs tracking-[0.2em] text-[var(--secondary-text)] mb-2 reveal-el">TRAVEL PROJECT</p>
						<h1 className="font-primary text-5xl md:text-6xl leading-tight lg:text-left text-center reveal-el gradient-title animate-gradient-x">
						TRAVELWORLD
					</h1>
					<div className="w-118 title-glow-line mb-4 lg:justify-start justify-self-center reveal-el" />
					<p className="max-w-407 leading-relaxed lg:text-left text-center reveal-el">
						A simple, friendly travel website that makes exploring destinations feel fun and effortless.
					</p>
					</div>
					{/* Right showcase */}
					<div className="flex justify-center lg:justify-end relative z-10 lg:col-span-7">
					{/* Showcase pedestal with hover tilt, close to the style of the reference image */}
					<div
						className="showcase group w-full max-w-4xl pop-on-scroll"
						ref={showcaseRef}
					>
						{/* Static laptop image; background and spin removed */}
						<div className="relative">
							<Image
								src="/assets/travelworld_laptop_4k_transparent_crisp 1.png"
								alt="Travelworld hero mockup"
								width={1200}
								height={700}
								className="relative z-10 w-full h-auto"
								priority
							/>
						</div>
					</div>
					</div>
				</div>
			</section>

				{/* Overview - redesigned */}
				<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)] -mt-px py-14 md:py-18 mb-16 md:mb-20">
					{/* Zigzag number: 02 on the left */}
					<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">
						02
					</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-12 gap-8 items-center">
							{/* Left: copy + quick facts */}
							<div className="col-span-12 lg:col-span-6 text-left space-y-6">
								<p className="text-xs tracking-[0.18em] text-[var(--secondary-text)] reveal-el">SECTION 02</p>
								<div className="w-150 border-b mb-1" />
								<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl tracking-wide reveal-el">OVERVIEW</h2>

								{/* Quick facts cards */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
									<div className="rounded-xl border border-white/10 bg-[var(--background)]/70 backdrop-blur-md p-4 reveal-el">
										<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-1">ROLE</p>
										<p className="text-[var(--text)] font-semibold">UX/UI Design & Front‑end</p>
									</div>
									<div className="rounded-xl border border-white/10 bg-[var(--background)]/70 backdrop-blur-md p-4 reveal-el">
										<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-1">TYPE</p>
										<p className="text-[var(--text)] font-semibold">Marketing Website (Travel)</p>
									</div>
									<div className="rounded-xl border border-white/10 bg-[var(--background)]/70 backdrop-blur-md p-4 sm:col-span-2 reveal-el">
										<p className="text-[11px] tracking-wide text-[var(--secondary-text)] mb-2">HIGHLIGHTS</p>
										<div className="flex flex-wrap gap-2">
											<span className="px-2.5 py-1 rounded-full text-xs bg-[var(--Secondary-Background)] text-[var(--text)] border border-white/10">Destination cards</span>
											<span className="px-2.5 py-1 rounded-full text-xs bg-[var(--Secondary-Background)] text-[var(--text)] border border-white/10">Special offers</span>
											<span className="px-2.5 py-1 rounded-full text-xs bg-[var(--Secondary-Background)] text-[var(--text)] border border-white/10">Testimonials</span>
											<span className="px-2.5 py-1 rounded-full text-xs bg-[var(--Secondary-Background)] text-[var(--text)] border border-white/10">Clear CTAs</span>
										</div>
									</div>
								</div>

								{/* Live Demo CTA */}
								<div className="reveal-el">
									<a
										href="https://travel-website-complete-w0th.onrender.com/index.html"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition shadow-lg"
									>
										<ExternalLink size={18} />
										<span>Live Demo</span>
									</a>
									<p className="text-[11px] text-[var(--secondary-text)] mt-2">Opens in a new tab</p>
								</div>
							</div>

							{/* Right: image card */}
							<div className="col-span-12 lg:col-span-6">
								<div className="relative group max-w-xl lg:ml-auto">
									<div className="absolute -inset-6 bg-[var(--accent)]/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
									<div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl pop-on-scroll bg-[var(--background)]">
										<Image
											src="/assets/Travel World Second Section .png"
											alt="Travelworld mockup"
											width={1000}
											height={600}
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			{/* Key Screens - redesigned for better layout */}
			<section className="reveal-section mt-20 md:mt-24 relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 lg:py-20 mb-16 md:mb-24">
				{/* Zigzag number: 03 on the right */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">03</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
					{/* Editorial block: big image + text columns */}
					<div className="grid grid-cols-12 gap-6 items-start">
						<div className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10">
							<Image src="/assets/Travel World Project Background .png" alt="Travel World" width={1400} height={900} className="w-full h-auto" />
						</div>
						<div className="col-span-12 lg:col-span-5 lg:pl-4">
							<p className="text-sm text-[var(--secondary-text)] mb-2">Overview</p>
							<h3 className="font-primary text-3xl text-[var(--text)] mb-4">A friendly travel experience</h3>
							<p className="text-[var(--text)]/90 leading-relaxed mb-3">A simple, friendly travel website that makes exploring destinations feel fun and effortless.</p>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
								<li><span className="font-semibold">Role:</span> UX/UI Design & Front‑end</li>
								<li><span className="font-semibold">Type:</span> Marketing Website (Travel)</li>
								<li className="sm:col-span-2"><span className="font-semibold">Highlights:</span> Destination cards, special offers, testimonials, clear CTAs</li>
							</ul>
							<div className="mt-5">
								<a href="https://travel-website-complete-w0th.onrender.com/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-4 py-2 rounded-md font-semibold hover:bg-[var(--accent-hover)] transition shadow-md">
									<ExternalLink size={16} />
									<span>Open Live Demo</span>
								</a>
							</div>
						</div>
					</div>

					{/* Pull quote */}
					<div className="text-center py-10">
						<p className="font-primary italic text-3xl md:text-5xl leading-snug text-[var(--text)]">“Make exploring destinations fun and effortless.”</p>
					</div>

					{/* What I did – two columns */}
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
								<li>Soft motion and no hydration issues.</li>
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
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-20">
				{/* Zigzag number: 04 on the left */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">04</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-10 reveal-el">TRIP THEMES</h2>

					<div className="relative flex items-center justify-center gap-8">
						{/* Arrows positioned like a carousel but with editorial look */}
						<button onClick={handlePrevTheme} aria-label="Previous theme" className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--Secondary-Background)]/60 hover:bg-[var(--Secondary-Background)] text-[var(--text)] shadow">
							<ChevronLeft size={28} />
						</button>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
							<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10 pop-on-scroll">
								<Image src={currentImage} alt={`${currentTheme.title} - Image ${currentImageIndex + 1}`} fill className="object-cover" />
							</div>
							<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10 pop-on-scroll">
								<Image src={currentTheme.images[(currentImageIndex + 1) % currentTheme.images.length]} alt={`${currentTheme.title} - Image ${(currentImageIndex + 1) % currentTheme.images.length + 1}`} fill className="object-cover" />
							</div>
						</div>

						<button onClick={handleNextTheme} aria-label="Next theme" className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--Secondary-Background)]/60 hover:bg-[var(--Secondary-Background)] text-[var(--text)] shadow">
							<ChevronRight size={28} />
						</button>
					</div>

					<p className="text-center text-sm text-[var(--secondary-text)] mt-4">{currentTheme.title}</p>
					<p className="text-center text-xs text-[var(--secondary-text)] mt-2">Swipe to preview: {themes.map((t) => t.title).join(", ")}.</p>
				</div>
			</section>

			{/* Special Offers - card list */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-20">
				{/* Zigzag number: 05 on the right */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">05</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<p className="text-sm text-[var(--secondary-text)] mb-4">Take advantage of our limited-time deals and save on your next adventure.</p>
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-8">SPECIAL OFFERS</h2>

					<div className="rounded-3xl bg-[color:rgba(142,197,255,0.12)] dark:bg-[color:rgba(31,120,172,0.18)] border border-white/10 shadow-xl p-6 md:p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[color:#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 25%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Summer Escape to Bali</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">7 nights at a luxury beachfront resort with daily breakfast and transfers.</p>
								<div className="mt-4 text-sm"><span className="line-through opacity-70 mr-2">$1,199</span><span className="font-bold">$899</span></div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">Book Now</button>
							</div>

							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[color:#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 20%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Romantic Paris Getaway</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">5 nights near the Eiffel Tower with Seine cruise and museum passes.</p>
								<div className="mt-4 text-sm"><span className="line-through opacity-70 mr-2">$1,349</span><span className="font-bold">$1,079</span></div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">Book Now</button>
							</div>

							<div className="group rounded-2xl bg-white dark:bg-[var(--Secondary-Background)] text-[var(--foreground)] border border-black/5 dark:border-white/10 shadow-md p-5 relative transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
								<span className="absolute -top-3 right-4 bg-[color:#e25b45] text-white text-xs font-bold px-2 py-1 rounded-md shadow">Save 30%</span>
								<h3 className="font-semibold text-[var(--text)] text-xl">Greek Island Hopping</h3>
								<p className="text-[var(--secondary-text)] text-sm mt-2">10-day adventure through the Cyclades with transfers and guided tours.</p>
								<div className="mt-4 text-sm"><span className="line-through opacity-70 mr-2">$1,899</span><span className="font-bold">$1,329</span></div>
								<button className="mt-4 inline-flex items-center gap-2 text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition">Book Now</button>
							</div>
						</div>
						<p className="text-[var(--secondary-text)] text-sm mt-4">Limited-time deals to save on your next adventure.</p>
					</div>
				</div>
			</section>

			{/* Project System section removed per request */}

			{/* CTA Section - dark band to echo hero */}
			<section className="reveal-section relative py-16 md:py-20 w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)]">
				{/* Zigzag number: 07 on the right */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">07</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<p className="text-sm text-[var(--secondary-text)] mb-4">Choose a destination below – the live website or the design file</p>
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-12 reveal-el">WHERE DO YOU WANT TO OPEN TRAVEL WORLD?</h2>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						{/* Visit Website Button */}
						<a
							href="https://travel-website-complete-w0th.onrender.com/index.html"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 bg-[var(--accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition shadow-lg pop-on-scroll"
						>
							<span className="text-2xl">ℹ</span>
							<span>VISIT WEBSITE</span>
							<span className="ml-2 bg-white text-[var(--accent)] px-3 py-1 rounded-full text-sm font-semibold">Open Site</span>
						</a>

						{/* View Figma Button */}
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 bg-[var(--accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition shadow-lg pop-on-scroll"
						>
							<span className="text-2xl">📱</span>
							<span>VIEW FIGMA</span>
							<span className="ml-2 bg-white text-[var(--accent)] px-3 py-1 rounded-full text-sm font-semibold">Open File</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}

