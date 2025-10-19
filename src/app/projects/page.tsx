import Link from 'next/link';

const projects = [
  { slug: 'project-1', title: 'Project One', subtitle: 'UX Case Study' },
  { slug: 'project-2', title: 'Project Two', subtitle: 'Frontend Build' }
];

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-primary mb-8">Projects</h1>
      <ul className="space-y-6">
        {projects.map((p) => (
          <li key={p.slug} className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.subtitle}</p>
            </div>
            <Link href={`/projects/${p.slug}`} className="text-btn-primary underline">
              View
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
