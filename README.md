# Jones Jankovic - Personal Site

A minimal personal site built with Vite and deployed to GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Technologies

- **Vite** - Fast build tool and dev server
- **GitHub Actions** - Automated deployment
- **GitHub Pages** - Hosting

## 🌐 Deployment

The site is automatically deployed to [jonesjankovic.dev](https://jonesjankovic.dev) when changes are pushed to the `main` branch.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment information.

## 📁 Project Structure

```
.
├── src/
│   ├── style.css      # Styles
│   └── main.js        # JavaScript entry point (if needed)
├── public/
│   └── CNAME          # Custom domain configuration
├── index.html         # Main HTML file
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## 🛠️ Configuration

- **Custom Domain**: Configured via `public/CNAME`
- **Build Output**: `dist/` directory (gitignored)
- **Base Path**: Set to `./` for GitHub Pages compatibility

## 📝 License

Personal site - All rights reserved.
