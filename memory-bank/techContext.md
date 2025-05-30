# Technical Context

## Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- React Server Components

## Development Setup
- Package manager: pnpm
- Linting: ESLint
- Styling: Tailwind with PostCSS
- Component library: Shadcn UI

## Technical Constraints
- App Router architecture
- Static site generation for marketing pages
- Serverless API routes for contact form

## Key Dependencies
```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "react-dom": "18.x",
    "tailwindcss": "3.x",
    "shadcn/ui": "latest"
  }
}
```

## Project Structure
```mermaid
flowchart TD
    app/ --> marketing[Marketing Pages]
    app/ --> api[API Routes]
    components/ --> ui[UI Components]
    components/ --> sections[Page Sections]
    data/ --> services[Service Data]
    data/ --> caseStudies[Case Studies]
    lib/ --> utils[Utility Functions]
