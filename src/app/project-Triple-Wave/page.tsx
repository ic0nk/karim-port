import { redirect } from "next/navigation";

export default function Page() {
	redirect("/project-triple-wave");
}

/*
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PageAnimator from "@/components/PageAnimator";
import DarkVeil from "@/components/DarkVeil";
import { ChevronLeft, ChevronRight, ExternalLink, Briefcase, Tag, Sparkles, CheckCircle2, Target } from "lucide-react";

// Local types copied from Travel World components
type Theme = { id: number; title: string; images: string[] };

// Same themes used by Travel World "Trip Themes" section
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

export default function TripleWaveProjectPage() {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [backgroundColor, setBackgroundColor] = useState<[number, number, number]>([0.88, 0.87, 0.86]);

	// Hover tiles state is static; hero uses DarkVeil background synced with theme
	useEffect(() => {
		import { redirect } from "next/navigation";

		export default function Page() {
		  redirect("/project-triple-wave");
		}
	);
}
*/

