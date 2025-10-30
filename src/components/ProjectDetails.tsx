"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";

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
		<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Hero */}
			<div className="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[80vh] relative py-10">
				{/* Cool hero background layer */}
				<div className="hero-mesh absolute inset-0 pointer-events-none" aria-hidden="true" />
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
				<div className="flex justify-center lg:justify-end relative z-10 lg:col-span-7">
					<div className="laptop-stage w-full max-w-4xl pop-on-scroll">
						<div className="stage-bg pointer-events-none" aria-hidden="true">
							<div className="screen-glow" />
							<div className="blob blob-1" />
							<div className="blob blob-2" />
							<div className="ring-glow" />
						</div>
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

				{/* Overview - redesigned */}
				<section className="reveal-section mt-16 relative w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)] py-14 md:py-18 mb-16 md:mb-20">
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

			{/* Trip Themes Carousel */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-20">
				{/* Zigzag number: 04 on the left */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">04</div>
				<div className="w-150 border-b mb-6" />
				<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-8 reveal-el">TRIP THEMES</h2>

				{/* Carousel Container */}
				<div className="relative flex items-center justify-center gap-6">
					{/* Left Arrow */}
					<button
						onClick={handlePrevTheme}
						aria-label="Previous theme"
						className="flex-shrink-0 p-2 rounded-full hover:bg-[var(--Secondary-Background)] transition text-[var(--text)]"
					>
						<ChevronLeft size={32} />
					</button>

					{/* Carousel Images */}
					<div className="flex-1 max-w-4xl overflow-hidden">
						<div className="flex gap-6">
							<div className="flex-1 pop-on-scroll">
								<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
									<Image
										src={currentImage}
										alt={`${currentTheme.title} - Image ${currentImageIndex + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							</div>
							<div className="flex-1 pop-on-scroll">
								<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
									<Image
										src={currentTheme.images[(currentImageIndex + 1) % currentTheme.images.length]}
										alt={`${currentTheme.title} - Image ${(currentImageIndex + 1) % currentTheme.images.length + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Right Arrow */}
					<button
						onClick={handleNextTheme}
						aria-label="Next theme"
						className="flex-shrink-0 p-2 rounded-full hover:bg-[var(--Secondary-Background)] transition text-[var(--text)]"
					>
						<ChevronRight size={32} />
					</button>
				</div>

				{/* Description */}
				<p className="text-center text-sm text-[var(--secondary-text)] mt-6 max-w-2xl mx-auto">
					Swipe to preview our themes: {themes.map((t) => t.title).join(", ")}.
				</p>
			</section>

			{/* Special Offers Section */}
			<section className="reveal-section relative w-screen left-1/2 -translate-x-1/2 bg-[var(--background)] py-16 md:py-20">
				{/* Zigzag number: 05 on the right */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-61 top-6 -rotate-90 select-none pointer-events-none">05</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<p className="text-sm text-[var(--secondary-text)] mb-4">Take advantage of our limited-time deals and save on your next adventure.</p>
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-8">SPECIAL OFFERS</h2>

					{/* Special Offers Image */}
					<div className="relative w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-white/10 pop-on-scroll">
						<Image
							src="/assets/special offer.png"
							alt="Special Offers"
							width={1200}
							height={600}
							className="w-full h-auto"
						/>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent p-4 text-white text-sm">Limited-time deals to save on your next adventure.</div>
					</div>
				</div>
			</section>

			{/* Project System Section */}
			<section className="reveal-section relative py-16 md:py-20 bg-[var(--Secondary-Background)]">
				{/* Zigzag number: 06 on the left */}
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-6 -rotate-90 select-none pointer-events-none">06</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<p className="text-sm text-[var(--secondary-text)] mb-4">Role, Tools, Visual Identity, Typography and Logo</p>
					<div className="w-150 border-b mb-6" />
					<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-12">PROJECT SYSTEM</h2>

					{/* Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Left Column */}
						<div className="space-y-12 reveal-el">
							{/* Role */}
							<div>
								<h3 className="text-sm font-semibold text-[var(--secondary-text)] tracking-wide mb-2">ROLE</h3>
								<p className="text-[var(--accent)] font-semibold">UX/UI DESIGN</p>
							</div>

							{/* Visual Identity */}
							<div>
								<h3 className="text-sm font-semibold text-[var(--secondary-text)] tracking-wide mb-4">VISUAL IDENTITY</h3>
								<div className="flex gap-3">
									<div className="w-12 h-12 rounded bg-gray-800" />
									<div className="w-12 h-12 rounded bg-blue-600" />
									<div className="w-12 h-12 rounded bg-gray-400" />
									<div className="w-12 h-12 rounded bg-blue-900" />
								</div>
							</div>

							{/* Logo */}
							<div>
								<h3 className="text-sm font-semibold text-[var(--secondary-text)] tracking-wide mb-3">LOGO</h3>
								<div className="inline-block">
									<span className="text-3xl font-bold">
										<span className="text-[var(--text)]">Travel</span>
										<span className="text-[var(--accent)]">World</span>
									</span>
								</div>
							</div>
						</div>

						{/* Right Column */}
						<div className="space-y-12 reveal-el">
							{/* Typography */}
							<div>
								<h3 className="text-sm font-semibold text-[var(--secondary-text)] tracking-wide mb-4">TYPOGRAPHY</h3>
								<div className="space-y-3">
									<div className="border-b border-[var(--secondary-text)] pb-2">
										<p className="font-primary text-2xl text-[var(--text)]">ALICE</p>
									</div>
									<div className="border-b border-[var(--secondary-text)] pb-2">
										<p className="font-number text-lg text-[var(--text)]">Aldrich</p>
									</div>
									<div className="border-b border-[var(--secondary-text)] pb-2">
										<p className="font-secondary text-base text-[var(--text)]">Lato</p>
									</div>
								</div>
							</div>

							{/* Tools */}
							<div>
								<h3 className="text-sm font-semibold text-[var(--secondary-text)] tracking-wide mb-2">TOOLS</h3>
								<p className="text-[var(--accent)] font-semibold">FIGMA</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="reveal-section relative py-16 md:py-20">
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

