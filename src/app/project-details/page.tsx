import ProjectDetails from '../../components/ProjectDetails';
import PageAnimator from '../../components/PageAnimator';

export default function ProjectDetailsPage() {
  // Initialize GSAP scroll animations at the page level to avoid duplicates,
  // and render the content with its internal animations disabled.
  return (
    <PageAnimator>
      <ProjectDetails enableAnimations={false} />
    </PageAnimator>
  );
}
