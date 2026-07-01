# Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Designed for software engineering and web development job applications.

## Features

- **5 pages**: Home, About, Projects, Experience, Contact
- **Responsive design** for desktop, laptop, tablet, and mobile
- **React Router** with lazy-loaded routes for fast performance
- **Accessible** navigation with skip link, ARIA labels, and keyboard focus states
- **SEO-ready** with page titles and meta descriptions
- **Smooth animations** with scroll reveal and subtle hover effects
- **Deployment-ready** for Netlify, Vercel, or Render

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Router 7](https://reactrouter.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Installation

```bash
# Clone or navigate to the project directory
cd web-portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

Replace placeholder content with your personal information:

| File | What to update |
|------|----------------|
| `.env` | Name, email, GitHub, LinkedIn, resume URL |
| `src/data/profile.js` | Bio, objective, strengths, interests |
| `src/data/projects.js` | Your project portfolio |
| `src/data/experience.js` | Work and internship history |
| `public/resume.pdf` | Your actual resume PDF |
| `public/projects/` | Project screenshot images |
| `index.html` | Default SEO meta tags |

### Environment Variables

```env
VITE_SITE_NAME=Your Name
VITE_EMAIL=you@email.com
VITE_GITHUB=https://github.com/yourusername
VITE_LINKEDIN=https://linkedin.com/in/yourusername
VITE_RESUME_URL=/resume.pdf
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run linter |

## Deployment

### Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Netlify

1. Push the project to GitHub
2. Connect the repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. SPA routing is handled by `public/_redirects`

Add environment variables in **Site settings → Environment variables**.

### Vercel

1. Import the repository in [Vercel](https://vercel.com)
2. Vercel auto-detects Vite settings
3. SPA routing is handled by `vercel.json`

Add environment variables in **Project Settings → Environment Variables**.

### Render

1. Create a new **Static Site** on [Render](https://render.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a rewrite rule: `/* → /index.html` (200)

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Hero, ContactForm
│   └── ui/           # Reusable UI components
├── data/             # Profile, projects, experience data
├── hooks/            # Custom React hooks
├── pages/            # Route pages
├── App.jsx           # Router setup
├── main.jsx          # Entry point
└── index.css         # Tailwind & global styles
```

## License

MIT
