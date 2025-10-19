import ProjectTemplate from '@/components/ProjectTemplate';

const PROJECTS: Record<string, any> = {
  'project-1': {
    title: 'TRAVELWORLD',
    subtitle: 'Case Study',
    description: 'A simple, friendly travel website that makes exploring destinations feel fun and effortless.',
    heroImage: '/assets/K.svg',
    content: (
      <>
        <p>This is the first project. Describe goals, process, and results here.</p>
        <p>Use the same layout for every project — replace content per project.</p>
      </>
    )
  },
  'project-2': {
    title: 'Project Two',
    subtitle: 'Frontend Build',
    description: 'This is project two. Add screenshots, links, and writeups here.',
    heroImage: '/assets/image 10.png',
    content: (
      <>
        <p>This is project two. Add screenshots, links, and writeups here.</p>
      </>
    )
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS[params.slug];
  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <ProjectTemplate title={project.title} subtitle={project.subtitle} description={project.description} heroImage={project.heroImage}>
      {project.content}
    </ProjectTemplate>
  );
}
