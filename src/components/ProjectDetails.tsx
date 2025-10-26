"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-lvh">
				<div className="text-left">
					<h1 className="text-[var(--text)] font-primary text-5xl md:text-6xl leading-tight">
						TRAVELWORLD
					</h1>
					<div className="w-118 border-b mb-4" />
					<p className="max-w-sm leading-relaxed">
						A simple, friendly travel website that makes exploring destinations feel fun and effortless.
					</p>
				</div>
				<div className="flex justify-center lg:justify-end">
					<div className="w-full max-w-3xl">
						<Image
							src="/assets/travelworld_laptop_4k_transparent_crisp 1.png"
							alt="Travelworld hero mockup"
							width={1200}
							height={700}
							className="w-full h-auto"
							priority
						/>
					</div>
				</div>
			</div>
			{/* Overview - placed after the hero */}
			<section className="mt-16 relative w-screen left-1/2 -translate-x-1/2 bg-[var(--Secondary-Background)] py-12 mb-16 md:mb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
						<div className="text-left">
					<div className="w-150 border-b mb-2" />
					<h2 className="text-[var(--text)] font-primary text-4xl tracking-wide mb-2">OVERVIEW</h2>
					<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -right-1 top-1/5 -translate-y-1/2 -rotate-90 select-none pointer-events-none">
						02
					</div>
					<ul className="space-y-3 text-sm max-w-md text-[var(--text)]">
						<li><span className="font-semibold">Role:</span> UX/UI Design & Front-end</li>
						<li><span className="font-semibold">Type:</span> Marketing Website (Travel)</li>
						<li><span className="font-semibold">Highlights:</span> Destination cards, special offers, testimonials, clear CTAs</li>
						<li>
							<span className="font-semibold">Live Demo:</span>{' '}
							<a href="https://travel-website-complete-w0th.onrender.com/index.html" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline">
								travel-website-complete-w0th.onrender.com
							</a>
						</li>
					</ul>
				</div>
				<div className="flex justify-center lg:justify-end">
					<div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
						<Image
							src="/assets/Travel World Second Section .png"
							alt="Travelworld mockup"
							width={800}
							height={480}
							className="w-full h-auto"
						/>
					</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Screens - redesigned and placed after Overview */}
			<section className="mt-20 md:mt-24 relative lg:pl-0 mb-16 md:mb-24">
				<div className="hidden lg:block text-number text-6xl text-[var(--secondary-text)] absolute -left-61 top-1/30 -translate-y-1/2 -rotate-90 select-none pointer-events-none">
					03
				</div>

				<p className="text-sm text-[var(--secondary-text)]">What the experience looks like</p>
				<div className="w-150 border-b mb-2" />
				<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mt-2">KEY SCREENS</h2>
				<div className="flex items-center justify-between mb-6">
					<div className="flex-1 text-center">
					</div>
					<div className="w-6" />
				</div>

				<div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg flex justify-center">
					<div className="max-w-5xl w-full">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Card 1 */}
							<div className="bg-white rounded-lg overflow-hidden shadow-sm border">
								<div className="h-40 md:h-48 w-full relative">
									<Image
										src="/assets/Triple Wave Project Background .png"
										alt="Bali, Indonesia"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<p className="text-xs text-[var(--secondary-text)]">Asia</p>
									<h3 className="font-semibold mt-1">Bali, Indonesia</h3>
									<p className="text-sm text-[var(--secondary-text)] mt-2">Experience the perfect blend of beautiful beaches, vibrant culture, and spiritual retreats.</p>
									<div className="mt-4 text-sm">
										<span className="font-semibold">From $899</span>
										<div className="mt-3">
											<a className="inline-block px-3 py-1 text-xs border rounded text-[var(--accent)]">Book Now</a>
										</div>
									</div>
								</div>
							</div>

							{/* Card 2 */}
							<div className="bg-white rounded-lg overflow-hidden shadow-sm border">
								<div className="h-40 md:h-48 w-full relative">
									<Image
										src="/assets/Travel World Project Background .png"
										alt="Paris, France"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<p className="text-xs text-[var(--secondary-text)]">Europe</p>
									<h3 className="font-semibold mt-1">Paris, France</h3>
									<p className="text-sm text-[var(--secondary-text)] mt-2">Discover the city of love with its iconic landmarks, world-class cuisine, and artistic heritage.</p>
									<div className="mt-4 text-sm">
										<span className="font-semibold">From $1,099</span>
										<div className="mt-3">
											<a className="inline-block px-3 py-1 text-xs border rounded text-[var(--accent)]">Book Now</a>
										</div>
									</div>
								</div>
							</div>

							{/* Card 3 */}
							<div className="bg-white rounded-lg overflow-hidden shadow-sm border">
								<div className="h-40 md:h-48 w-full relative">
									<Image
										src="/assets/Owen Bryce Project Background .png"
										alt="Santorini, Greece"
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-4">
									<p className="text-xs text-[var(--secondary-text)]">Europe</p>
									<h3 className="font-semibold mt-1">Santorini, Greece</h3>
									<p className="text-sm text-[var(--secondary-text)] mt-2">Enjoy breathtaking sunsets, white-washed buildings, and crystal-clear waters on this magical island.</p>
									<div className="mt-4 text-sm">
										<span className="font-semibold">From $1,299</span>
										<div className="mt-3">
											<a className="inline-block px-3 py-1 text-xs border rounded text-[var(--accent)]">Book Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-6 flex justify-center">
							<button className="px-4 py-2 border rounded text-sm text-[var(--accent)]">View All Destinations</button>
						</div>
					</div>
				</div>

				<p className="mt-6 text-center text-sm text-[var(--secondary-text)] max-w-3xl mx-auto">
					Featured Destinations — A reusable card component designed for quick scanning. Each card highlights the location, rating, best travel time, trip tags, and price, ending with a clear Book Now CTA to encourage action.
				</p>
			</section>
			
			{/* Trip Themes Carousel */}
			<section className="py-16 md:py-20">
				<div className="w-150 border-b mb-6" />
				<h2 className="text-[var(--text)] font-primary text-4xl md:text-5xl mb-8">TRIP THEMES</h2>

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
							<div className="flex-1">
								<div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
									<Image
										src={currentImage}
										alt={`${currentTheme.title} - Image ${currentImageIndex + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							</div>
							<div className="flex-1">
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
		</main>
	);
}

