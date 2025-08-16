# 🚀 Portfolio Website

A modern, responsive portfolio website built with **Next.js** and **Tailwind CSS**. This project showcases my skills, projects, and blog posts in an elegant and professional manner.

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean and professional design with smooth animations
- **Blog System** - Markdown-based blog with syntax highlighting
- **Project Showcase** - Dynamic portfolio section featuring my projects
- **Skills Display** - Interactive skills section with animated icons
- **SEO Optimized** - Built-in metadata and SEO features
- **Performance** - Fast loading with Next.js optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.6
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome, React Icons
- **Animations**: Framer Motion
- **Markdown**: Gray Matter, Marked
- **Syntax Highlighting**: Highlight.js
- **Analytics**: Vercel Analytics

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Isaaja/portofolio-app.git
   cd portofolio-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add the following to your `.env.local`:

   ```env
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   NEXT_PUBLIC_PUBLIC_ASSETS="$NEXT_PUBLIC_BASE_URL/images/posts/assets"
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portofolio-app/
├── components/
│   ├── layouts/          # Layout components
│   │   ├── footer.js
│   │   ├── layout.js
│   │   └── navigation.js
│   ├── sections/         # Main page sections
│   │   ├── AboutSection.js
│   │   ├── HeroSection.js
│   │   ├── ProjectsSection.js
│   │   └── SkillsSection.js
│   ├── utilities/        # Utility components
│   │   ├── data-portofolio.js
│   │   ├── icon.js
│   │   ├── JumpToTop.js
│   │   ├── metadata.js
│   │   └── toc.js
│   └── ModalComponent.js
├── pages/                # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js          # Homepage
│   └── fonts/            # Custom fonts
├── posts/                # Blog posts (Markdown)
├── public/               # Static assets
│   ├── images/
│   │   ├── portofolio/   # Project images
│   │   └── skills/       # Skill icons
│   └── fonts/
├── styles/               # Global styles
│   └── globals.css
└── utilities/            # Utility functions
    └── sortPostsByDate.js
```

## 🎯 Key Features

### Portfolio Projects

- **Jack Project**: E-commerce website using React and Shopee API
- **Cinematix**: Movie web app with ticket-style sharing features
- **Foodsites**: SaaS platform for restaurant website building

### Blog System

- Markdown-based blog posts
- Syntax highlighting for code blocks
- Tag-based categorization
- Reading time estimation

### Skills Section

- Interactive skill icons with animations
- Categorized by technology type
- Responsive grid layout

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@Isaaja](https://github.com/Isaaja)
- **Portfolio**: [Live Demo](https://your-portfolio-url.vercel.app)

---

⭐ If you find this project helpful, please give it a star!
