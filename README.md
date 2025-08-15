# Abel Portfolio

This is a personal portfolio web application for Abel Adamu Shumet, built with React and TypeScript.

## Features

- Hero section with name, title, and description
- Downloadable CV (PDF)
- Social links (Email, LinkedIn, GitHub)
- Location info
- "View My Work" button for smooth scrolling to projects

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abeladamushumet/abel-portfolio.git
   cd abel-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Place your CV PDF (`abela.pdf`) in the `public` folder:

   ```
   /client/public/abela.pdf
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Cv/
├── client/
│   ├── public/
│   │   └── abela.pdf
│   └── src/
│       └── components/
│           └── HeroSection.tsx
│       └── App.tsx
│       └── ...
└── ...
```

## Usage

- Click **Download CV** to download Abel's CV as a PDF.
- Use the social icons to contact or connect.
- Click **View My Work** to scroll to the projects section.

## Customization

- Update `HeroSection.tsx` to change name, title, description, or social links.
- Replace `abela.pdf` in the `public` folder with your own CV.
