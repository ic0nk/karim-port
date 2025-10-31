import { redirect } from "next/navigation";

// This legacy route exists for backwards compatibility.
// Redirect to the new projects route.
export default function Page() {
	redirect("/projects/triple-wave");
}

