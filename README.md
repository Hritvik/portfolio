# Distracted Dev Portfolio

A clean, editorial minimal portfolio website built with React, TypeScript, and Vite. Features interactive architecture diagrams using React Flow for backend projects.

## ✨ Features

- **Modern Stack**: React + TypeScript + Vite
- **Design System**: Editorial minimal aesthetic with DM Serif Display, DM Mono, and DM Sans fonts
- **Interactive Diagrams**: React Flow integration for backend project architecture visualizations
- **Dark Mode**: Automatic dark/light mode support via `prefers-color-scheme`
- **Responsive**: Mobile-first design with breakpoints
- **Filterable Projects**: Type and organization-based filtering
- **Clean Animations**: Smooth transitions and fade-in effects

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with custom properties
- **Diagrams**: React Flow
- **Fonts**: Google Fonts (DM Serif Display, DM Mono, DM Sans)
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:Hritvik/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ArchitectureDiagram.tsx
│   ├── Blog.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/               # Sample data
│   ├── projects.ts
│   ├── blogPosts.ts
│   └── diagrams.ts
├── styles/             # CSS and design system
│   ├── globals.css
│   └── design-system.css
├── types/              # TypeScript definitions
│   └── index.ts
└── App.tsx             # Main application
```

## 🎨 Design System

### Colors
- **Primary**: Off-white backgrounds, near-black text
- **Accents**: Teal (#5DCAA5) for backend, Purple (#AFA9EC) for frontend, Coral (#F0997B) for Android
- **Borders**: 0.5px hairlines, no shadows or gradients

### Typography
- **Headings**: DM Serif Display
- **Labels/Tags**: DM Mono
- **Body**: DM Sans

### Layout
- **Max Width**: 900px centered content
- **Padding**: 2rem side padding
- **Grid**: CSS Grid for project cards

## 📊 Architecture Diagrams

Backend projects include interactive architecture diagrams built with React Flow:

- **E-Commerce API Gateway**: Microservices architecture
- **Distributed Message Queue**: Queue system with workers
- **Authentication Microservice**: JWT-based auth service
- **Video Processing Pipeline**: Media processing workflow

Click "Architecture" button on backend project cards to view interactive diagrams.

## 🚀 Deployment

### Vercel

1. **Git Integration (Recommended)**:
   ```bash
   git push origin main
   ```
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Vite project
   - Click "Deploy"

2. **Vercel CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

### Netlify

1. **Git Integration**:
   ```bash
   git push origin main
   ```
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod
   ```

## 📝 Customization

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  desc: 'Project description',
  type: 'backend' | 'frontend' | 'android',
  org: 'personal' | 'org',
  tags: ['tag1', 'tag2'],
  diagram: 'diagram-id', // Optional
  github: 'https://github.com/...',
  live: 'https://example.com'
}
```

### Adding Architecture Diagrams

Edit `src/data/diagrams.ts`:

```typescript
{
  id: 'diagram-id',
  name: 'Diagram Name',
  nodes: [/* React Flow nodes */],
  edges: [/* React Flow edges */]
}
```

### Customizing Colors

Edit `src/styles/design-system.css` CSS custom properties:

```css
:root {
  --color-backend: #5DCAA5;
  --color-frontend: #AFA9EC;
  --color-android: #F0997B;
  /* ... other colors */
}
```

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically enabled based on user's system preference using `prefers-color-scheme` media query.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](../../issues) if you want to contribute.

---

Built with ❤️ for the Distracted Dev portfolio
