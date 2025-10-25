"use client";

import Image from "next/image";

export default function ProjectDetails() {
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

			
		</main>
	);
}

