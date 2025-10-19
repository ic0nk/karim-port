"use client";

import Image from "next/image";

export default function ProjectDetails() {
	return (
		<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
			{/* Hero: left title + description, right image */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div className="text-left">
					<h1 className="text-[var(--text)] font-primary text-5xl md:text-6xl leading-tight">
						TRAVELWORLD
					</h1>
					<div className="w-40 border-b border-gray-400 my-3" />
					<p className="text-gray-600 max-w-sm leading-relaxed">
						A simple, friendly travel website that makes exploring destinations feel fun and effortless.
					</p>
				</div>
				<div className="flex justify-center lg:justify-end">
					<div className="w-full max-w-3xl">
						<Image
							src="/assets/image 10.png"
							alt="Travelworld hero mockup"
							width={1200}
							height={700}
							className="w-full h-auto rounded-xl shadow-xl"
							priority
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

