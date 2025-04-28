# Mobius - AI-Powered Job Application Platform

Mobius is a modern web application built with Next.js that helps job seekers streamline their job search process through AI-powered tools and professional coaching services.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- Git

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mobuis
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd mobuis_frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
mobuis_frontend/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── common/      # Shared components
│   │   ├── pages/       # Page-specific components
│   │   └── reusable/    # Reusable UI components
│   └── styles/          # Global styles
├── public/              # Static assets
│   └── images/         # Image assets
└── package.json        # Project dependencies and scripts
```

## Features

- Modern, responsive UI built with Tailwind CSS
- Component-based architecture using Next.js
- Optimized images using Next.js Image component

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Runs the production server
- `npm run lint` - Runs the linter to check for code quality issues

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.