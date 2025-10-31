import TravelWorldHoverSection from "@/components/TravelWorldHoverSection";
import PageAnimator from "@/components/PageAnimator";
import ProjectDetails from "@/components/ProjectDetails";

export default function TravelWorldPage() {
  return (
    <PageAnimator>
      {/* Hover exploration section with animated DarkVeil background */}
      <TravelWorldHoverSection />

      {/* Full project details using the same GSAP reveal patterns as the home page */}
      <ProjectDetails enableAnimations={false} />
    </PageAnimator>
  );
}
