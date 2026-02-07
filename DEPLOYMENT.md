# Deployment Guide

## Overview
This site uses Vite for development and is automatically deployed to GitHub Pages using GitHub Actions.

## How it Works

### Development
- Run `npm install` to install dependencies
- Run `npm run dev` to start the development server
- The site will be available at `http://localhost:5173`

### Building
- Run `npm run build` to build the site for production
- The built files will be in the `dist` folder
- Run `npm run preview` to preview the built site locally

### Deployment
When you push changes to the `main` branch:

1. GitHub Actions automatically runs the workflow defined in `.github/workflows/deploy.yml`
2. The workflow:
   - Checks out the code
   - Installs Node.js and dependencies
   - Builds the site with `npm run build`
   - Uploads the `dist` folder contents as a GitHub Pages artifact
   - Deploys the artifact to GitHub Pages

3. The site becomes available at your custom domain `jonesjankovic.dev`

## Important Files

- `vite.config.js` - Vite configuration with:
  - `base: './'` - Uses relative paths for assets (required for GitHub Pages)
  - `publicDir: 'public'` - Directory for static assets like CNAME

- `public/CNAME` - Contains the custom domain name for GitHub Pages

- `.github/workflows/deploy.yml` - GitHub Actions workflow for automated deployment

## Repository Settings

Make sure GitHub Pages is configured to deploy from GitHub Actions:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source

## Troubleshooting

### MIME Type Errors
The previous deployment was serving raw source files instead of built files, causing MIME type errors when the browser tried to load CSS as JavaScript modules. This is now fixed by:
- Building the site with Vite before deployment
- Deploying only the built `dist` folder contents
- Using relative paths for all assets

### Custom Domain
The `public/CNAME` file ensures your custom domain `jonesjankovic.dev` continues to work after each deployment.
