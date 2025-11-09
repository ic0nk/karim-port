# Karim Massaoud Portfolio

Modern personal portfolio built with Next.js (App Router) to showcase academic and professional work, highlight technical experience, and provide a direct contact channel.

## Repository

This codebase lives on GitHub: [ic0nk/karim-port](https://github.com/ic0nk/karim-port). Clone or fork it there to contribute or explore the implementation details.

## What's Included

- **Landing experience** with animated hero, theme toggle, and smooth-scroll cues.
- **About** page detailing background, expertise, and a concise skills overview.
- **Experience** section presenting roles, responsibilities, and key milestones.
- **Project highlights** with dedicated case-study pages (e.g., Triple Wave, Owen Bryce, Travel World) that combine narrative, visuals, and tech notes.
- **Reusable UI components** (header, footer, project templates, scroll helpers, noise overlay, and WebGL effects) designed for consistency across pages.
- **Contact flow** featuring a client-side form that stores submissions to `src/data/contacts.json` via a Next.js server action (`/api/contact`).
- **Admin messages dashboard** (`/admin/messages`) for reviewing archived contact requests inside the app.

## Tech Stack

- Next.js 15 with the App Router
- React 19 + TypeScript
- Tailwind CSS 4 utilities with custom design tokens
- GSAP and OGL for motion graphics and WebGL background effects
- Lucide and React Icons for iconography
- Biome for linting and formatting

## Local Development

```bash
# clone with Git
git clone https://github.com/ic0nk/karim-port.git
cd karim-port

# install dependencies (pick one)

# or
npm install

# start the development server
pnpm dev
# or
npm run dev
```

Open `http://localhost:3000` to browse the portfolio. Pages in `src/app/` update automatically as you edit them.

### Useful Scripts

- `pnpm build` – compile the production build.
- `pnpm start` – run the compiled build locally.
- `pnpm lint` – check code quality with Biome.
- `pnpm format` – apply opinionated formatting.

## Data & Content Management

Contact form submissions persist to `src/data/contacts.json`. When deploying to a serverless platform, ensure the runtime supports Node.js file operations or switch to a database/storage service. Project copy, imagery, and section content live inside the `src/app` and `src/components` directories for easy iteration.

## Contributing & Feedback

Feel free to open an issue or submit a pull request on GitHub if you spot bugs, want to propose improvements, or have ideas for new sections. Feedback is always welcome.


