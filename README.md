# Legendary Portfolio Website

A visually stunning, emotionally engaging portfolio website built with React, TypeScript, and Framer Motion. This portfolio is designed to make recruiters stop scrolling and showcase your work in the best possible light.

## Features

- **Immersive Hero Section** - Full-screen animated gradient background with smooth blob animations
- **Dark/Light Mode** - Beautiful theme switching with persistent user preference
- **Smooth Animations** - Framer Motion powered scroll animations and micro-interactions
- **Responsive Design** - Perfect on all devices from mobile to desktop
- **Interactive Projects** - Filterable project showcase with modal detail views
- **Contact Form** - Elegant contact form with validation animations
- **Performance Optimized** - Built with Vite for lightning-fast load times
- **SEO Ready** - Comprehensive meta tags for search engines and social sharing

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code for better developer experience
- **Framer Motion** - Smooth, professional animations
- **Tailwind CSS** - Utility-first styling with custom animations
- **Vite** - Next-generation frontend tooling
- **Lucide React** - Beautiful icon library

## Project Structure

```
src/
├── components/          # All React components
│   ├── Hero.tsx        # Landing section with animated background
│   ├── About.tsx       # About section with value cards
│   ├── Education.tsx   # Timeline-based education display
│   ├── Skills.tsx      # Categorized skills with animations
│   ├── Projects.tsx    # Filterable project showcase with modals
│   ├── Certifications.tsx  # Certification cards
│   ├── Contact.tsx     # Contact form and social links
│   ├── Navbar.tsx      # Sticky navigation with theme toggle
│   └── Footer.tsx      # Footer section
├── contexts/
│   └── ThemeContext.tsx  # Dark/light mode context
├── utils/
│   └── animations.ts   # Reusable animation variants
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles and custom animations
```

## Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero.tsx** - Line 24-32
- Replace "Your Name" with your actual name
- Update the role/title
- Change the tagline
- Update social media links

**index.html**
- Update the title and meta descriptions
- Replace "Your Name" throughout

### 2. About Section

**About.tsx** - Line 19-44
- Customize the values/principles
- Update the description paragraph

### 3. Education

**Education.tsx** - Line 11-35
- Add your degrees and institutions
- Update years and achievements

### 4. Skills

**Skills.tsx** - Line 11-26
- Replace with your actual skills
- Organize by categories that make sense for you

### 5. Projects

**Projects.tsx** - Line 19-72
- Replace with your real projects
- Include live URLs and GitHub links
- Add compelling impact statements
- Describe technical challenges solved

### 6. Certifications

**Certifications.tsx** - Line 11-30
- Add your certifications
- Include credential links

### 7. Contact

**Contact.tsx** - Line 33-36
- Update social media URLs
- Change email address

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Performance Considerations

- **Code Splitting** - Components are loaded efficiently
- **Optimized Animations** - Respects reduced-motion preferences
- **Image Loading** - Use lazy loading for images when you add them
- **Bundle Size** - Current JS bundle is ~297KB (93KB gzipped)

## Design Philosophy

- **Bold Gradients** - Cyan to blue gradients for a modern, tech-forward feel
- **Glassmorphism** - Frosted glass effects for depth and sophistication
- **Smooth Animations** - Every interaction feels polished and intentional
- **Accessibility** - Proper contrast ratios and keyboard navigation
- **Mobile First** - Responsive design that works everywhere

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Color Palette

- **Primary**: Cyan-500 (#06b6d4) to Blue-600 (#2563eb)
- **Secondary**: Teal-700 (#0f766e)
- **Dark Mode**: Slate-900 (#0f172a)
- **Light Mode**: White (#ffffff)

## Animation Details

- **Page Load**: Staggered fade-in animations
- **Scroll**: Elements reveal as you scroll down
- **Hover**: Smooth scale and elevation changes
- **Navigation**: Smooth scrolling between sections
- **Theme Toggle**: Instant mode switching

## Deployment

This portfolio can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project and upload the `dist` folder.

## License

This is a custom-built portfolio template. Feel free to use it as inspiration for your own portfolio, but please customize it significantly to make it your own.

## Credits

Built with modern web technologies and a focus on creating an emotional connection with viewers. Every animation, color, and layout choice was made with intention to create a memorable experience.
