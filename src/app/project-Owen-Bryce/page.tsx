"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function OwenBrycePage() {
	const [activeTab, setActiveTab] = useState<"instagram" | "quotes" | "spotify" | "feedbacks">("instagram");

	return (
		<main className="min-h-screen bg-[var(--background)]">
			{/* Hero Section */}
			<section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
				{/* Background image */}
						<Image
							src="/assets/Owne bryce pic1.png"
					alt="Close-up microphone with bokeh lights in background"
					fill
					priority
					className="object-cover"
				/>
				{/* Dark overlay */}
				<div className="absolute inset-0 bg-black/50" />

				{/* Content */}
				<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[90vh] md:min-h-screen">
					{/* Badge */}
					<span className="inline-block bg-[#FFD24D] text-black text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-md mb-5">
						EP Promotion Project
					</span>

					{/* Title */}
					<h1 className="text-white font-primary text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
						Owen Bryce
					</h1>

					{/* Subtitle */}
					<p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
						A comprehensive promotional campaign for an emerging folk/indie artist, creating a cohesive brand identity across multiple platforms
					</p>

					{/* CTA */}
					<Link
						href="#content"
						className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-[var(--accent)] text-white text-sm font-semibold tracking-wide shadow hover:opacity-90 transition"
					>
						Explore the Project
					</Link>

					{/* Down arrow cue */}
					<ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 w-6 h-6 animate-bounce" />
				</div>
			</section>

			{/* Project Overview */}
			<section id="content" className="w-full py-16 md:py-24 bg-[var(--Secondary-Background)]">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-primary text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
						Project Overview
					</h2>
					<div className="h-1 w-16 bg-[var(--accent)] rounded mt-3 mb-8" />

					<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
						{/* Overview image */}
						<div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg bg-black/5">
							<Image
								src="/assets/Owne bryce pic1.png"
								alt="Owen Bryce microphone and lights"
								fill
								className="object-cover"
								priority
							/>
						</div>

						{/* Overview text */}
						<div>
							<p className="text-[var(--muted-foreground)] leading-relaxed">
								The project focused on creating a comprehensive promotional strategy for Owen Bryce, an emerging folk/indie artist preparing to release his debut EP. Our goal was to develop a cohesive brand identity and promotional campaign across multiple platforms to maximize audience reach and engagement.
							</p>

							<dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<dt className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Client</dt>
									<dd className="text-[var(--foreground)] font-medium">Owen Bryce</dd>
								</div>
								<div>
									<dt className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Role</dt>
									<dd className="text-[var(--foreground)] font-medium">Marketing Strategist / Producer / Designer</dd>
								</div>
								<div>
									<dt className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Timeline</dt>
									<dd className="text-[var(--foreground)] font-medium">8 weeks</dd>
								</div>
								<div>
									<dt className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Platforms</dt>
									<dd className="text-[var(--foreground)] font-medium">Instagram, Spotify, TikTok, Print Media</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</section>

			{/* The Challenge & Our Strategy */}
			<section className="py-10 md:py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-8">
					<div className="bg-white rounded-xl shadow-md p-6 md:p-8">
						<h3 className="font-primary text-xl sm:text-2xl font-semibold text-[var(--foreground)]">The Challenge</h3>
						<p className="mt-3 text-[var(--muted-foreground)] text-sm leading-relaxed">
							Owen Bryce, a talented folk/indie artist, needed to establish his brand identity and promote his debut EP in a crowded music market. With limited resources and recognition, he faced the challenge of standing out and connecting with his target audience across multiple platforms.
						</p>
						<ul className="mt-4 space-y-2 text-[var(--foreground)] text-sm list-disc pl-5">
							<li>Establishing a distinctive brand identity</li>
							<li>Creating cohesive content across platforms</li>
							<li>Reaching the right audience for his genre</li>
							<li>Maximizing impact with limited resources</li>
							<li>Building a foundation for long-term growth</li>
						</ul>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6 md:p-8">
						<h3 className="font-primary text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Our Strategy</h3>
						<p className="mt-3 text-[var(--muted-foreground)] text-sm leading-relaxed">
							We developed a multi-platform strategy centered around authentic storytelling and visual consistency. By focusing on Owen’s unique artistic voice and creating a cohesive visual language, we built a promotional campaign that resonated with his target audience.
						</p>
						<ul className="mt-4 space-y-2 text-[var(--foreground)] text-sm list-disc pl-5">
							<li>Develop a comprehensive brand guide with consistent visual elements</li>
							<li>Create platform-specific content optimized for each channel</li>
							<li>Implement a coordinated release schedule across platforms</li>
							<li>Leverage authentic storytelling to build emotional connection</li>
							<li>Design shareable assets to maximize organic reach</li>
						</ul>
					</div>
				</div>
			</section>

			{/* Project Components (Tabs) */}
			<section className="py-12 md:py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="font-primary text-3xl sm:text-4xl font-bold text-[var(--foreground)]">Project Components</h2>
					<div className="h-1 w-16 bg-[var(--accent)] rounded mt-3" />

					{/* Tabs */}
					<div className="mt-6 border-b border-black/10 overflow-x-auto">
						<div className="flex gap-6 text-sm">
							{[
								{ key: "instagram", label: "Instagram" },
								{ key: "quotes", label: "Quotes & Posters" },
								{ key: "spotify", label: "Spotify" },
								{ key: "feedbacks", label: "Feedbacks" },
							].map((t) => (
								<button
									key={t.key}
									onClick={() => setActiveTab(t.key as typeof activeTab)}
									className={`relative py-3 -mb-px whitespace-nowrap ${
										activeTab === t.key
											? "text-[var(--foreground)] font-semibold border-b-2 border-[var(--accent)]"
											: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
									}`}
								>
									{t.label}
								</button>
							))}
						</div>
					</div>

					{/* Tab Panels */}
					<div className="mt-10 space-y-12">
						{activeTab === "instagram" && (
							<div className="grid lg:grid-cols-12 gap-8 items-start">
								<div className="lg:col-span-6">
									<h3 className="font-primary text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
										Instagram Strategy & Content Management
									</h3>
									<p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
										We developed a comprehensive Instagram strategy to build Owen’s following and create anticipation for his EP release. The approach focused on consistent visual aesthetics, authentic storytelling, and strategic content scheduling.
									</p>
									<h4 className="mt-6 font-semibold text-[var(--foreground)]">Key Deliverables:</h4>
									<ul className="mt-3 space-y-2 list-disc pl-5 text-sm">
										<li>Weekly content calendar with consistent posting schedule</li>
										<li>Short reels previewing new songs</li>
										<li>Behind-the-scenes studio sessions</li>
										<li>Interactive story polls and Q&A sessions</li>
										<li>Highlights for music releases, concerts, and fan interactions</li>
									</ul>
								</div>
								<div className="lg:col-span-6">
									<div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
										<Image src="/assets/Frame 129.png" alt="Instagram preview" fill className="object-cover" />
									</div>
								</div>
							</div>
						)}

						{activeTab === "quotes" && (
							<div className="grid lg:grid-cols-12 gap-8 items-start">
								<div className="lg:col-span-6 order-2 lg:order-1">
									<h3 className="font-primary text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
										Inspirational Quotes & Artist Promotion
									</h3>
									<p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
										To amplify Owen Bryce’s artistic message and increase engagement, we curated authentic quotes and analyzed effective promotional methods from established artists in the indie/folk scene.
									</p>
									<h4 className="mt-6 font-semibold text-[var(--foreground)]">Key Deliverables:</h4>
									<ul className="mt-3 space-y-2 list-disc pl-5 text-sm">
										<li>Authentic quote collection aligned with the brand</li>
										<li>Visually consistent quote graphics optimized for Instagram</li>
										<li>Research on techniques from leading artists and campaigns</li>
										<li>Teaser campaigns and social countdowns</li>
										<li>Fan connection tactics like Q&As and behind-the-scenes glimpses</li>
									</ul>
								</div>
								<div className="lg:col-span-6 order-1 lg:order-2">
									<div className="relative w-full aspect-[16/12] rounded-xl overflow-hidden shadow-lg">
										<Image src="/assets/Rectangle 61.png" alt="Quotes and posters collage" fill className="object-cover" />
									</div>
								</div>
							</div>
						)}

						{activeTab === "spotify" && (
							<div className="grid lg:grid-cols-12 gap-8 items-start">
								<div className="lg:col-span-6">
									<h3 className="font-primary text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
										Spotify Branding & TikTok Strategy
									</h3>
									<p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
										We designed a cohesive visual branding for Bryce’s EP cover suitable for Spotify and developed an engaging TikTok promotion strategy to reach new audiences.
									</p>
									<h4 className="mt-6 font-semibold text-[var(--foreground)]">Key Deliverables:</h4>
									<ul className="mt-3 space-y-2 list-disc pl-5 text-sm">
										<li>Professional EP cover following Spotify guidelines</li>
										<li>Minimalist design with strong visual impact (3000x3000px)</li>
										<li>Clear typography featuring EP title and artist name</li>
										<li>TikTok campaign with short, engaging teasers</li>
										<li>Behind-the-scenes footage of EP creation</li>
										<li>Regular posting schedule for maximum reach</li>
									</ul>
								</div>
								<div className="lg:col-span-6">
									<div className="rounded-xl overflow-hidden shadow-lg bg-black/5">
										<iframe
											title="Spotify playlist"
											src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
											width="100%"
											height="380"
											allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
											loading="lazy"
											className="w-full h-[380px]"
										/>
									</div>
								</div>
							</div>
						)}

						{activeTab === "feedbacks" && (
							<div className="space-y-6">
								<div className="bg-white rounded-xl shadow-md p-6">
									<h4 className="font-semibold text-[var(--foreground)]">Checkpoint 8 — Feedback Pim and Jo-An in class</h4>
									<p className="mt-3 text-[var(--muted-foreground)] text-sm leading-relaxed">
										We talked with our teacher about what we’ve been doing over the last few weeks. We showed the brand guide and the logos we made, explaining our ideas and choices. Our teacher gave helpful advice and told us how to present everything clearly this Friday. This way, we can impress Owen Bryce and have him choose our work for his product.
									</p>
								</div>
								<div className="bg-white rounded-xl shadow-md p-6">
									<h4 className="font-semibold text-[var(--foreground)]">Checkpoint 3 — Standup Josh & Maikel</h4>
									<p className="mt-3 text-[var(--muted-foreground)] text-sm leading-relaxed">
										Today, we talked with our teacher about our progress. He asked us some questions about our logo, and we showed him the one Owen Bryce chose. He told us to focus more on his design and make sure it matches the same style and font. We also asked about the website design we’re making for him. He said we need to understand what style and colours he likes so he can see how our work fits his vision.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}

