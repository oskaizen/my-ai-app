# My AI App

A Next.js application built with React and TypeScript.

## Prerequisites

Before launching the app, make sure you have the following installed:

- **Node.js** (version 20 or higher recommended)
- **npm** (comes with Node.js) or **yarn**/**pnpm**/**bun**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## Installation

1. Navigate to the application directory:
```bash
cd turbocharge
```

2. Install the dependencies:
```bash
npm install
```

## Launching the App

### Development Mode

To run the app in development mode with hot-reloading:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to that URL to see the application. The page will automatically reload when you make changes to the code.

### Production Mode

To build and run the app in production mode:

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server (requires `npm run build` first)
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

The main application code is located in the `turbocharge` directory, which contains:
- `app/` - Next.js app directory with pages and components
- `public/` - Static assets
- `package.json` - Project dependencies and scripts

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Clear the `.next` cache folder and rebuild: `rm -rf .next && npm run build`
3. Check that port 3000 is not already in use by another application

