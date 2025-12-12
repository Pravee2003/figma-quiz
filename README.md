📘 Figma Quiz — Frontend Assignment

A pixel-perfect quiz application built from a Figma design using React, TypeScript, and Tailwind CSS, with smooth animations, glass-morphism UI, scrolling score logic, and custom-drawn bubble art — fully matching the assignment requirements.

🚀 Live Demo

🔗 (Add your Vercel link here once deployed)
Example: https://vercel.com/praveen-sampaths-projects/figma-quiz

📂 GitHub Repository

🔗 (Add your GitHub repo link here)
Example: https://github.com/Pravee2003/figma-quiz

🛠️ Tech Stack
Technology	Purpose
React + TypeScript	Component-based UI & type safety
Tailwind CSS	Figma-accurate styling
CSS Keyframe Animations	Scrolling score, fade-ins
Vite	Fast dev environment
Vercel	Deployment
🎨 Key Features
✔ Pixel-Perfect UI (Figma Accurate)

Exact spacing, radius, shadows, blur & glass backgrounds

Typography: DM Serif Display

Colors & gradients extracted from Figma

Matching hover, active, spacing, alignment

✔ Quiz System

Multi-question flow

Selected option highlight

Disabled ← button on first question

Hidden ← on last question

Submit appears only on final question

✔ Progress Indicator (Figma Vector Replication)

Fully custom segmented tracker

Matching vector outlines & gradient segments

✔ Custom Drawn "Best of Luck" Bubble

Created using pure HTML + CSS, not an image

Curved tail, border, fill, shading — 100% accurate

✔ Animated Result Page

Number scrolls upward like movie credits

% symbol fades in 0.5s after animation ends

If score = 0 → no animation, number appears instantly

Gradient text using background-clip: text

📦 Installation & Running Locally
git clone https://github.com/your-username/figma-quiz
cd figma-quiz
npm install
npm run dev


Your app runs at:

http://localhost:5173

🌐 Deployment Instructions (Vercel)

Go to https://vercel.com

Click New → Project

Import your GitHub repository

Configure:

Framework Preset: Vite

Build Command: npm run build

Output Folder: dist

Deploy 🎉

Copy the live URL & place it in the README under Live Demo

📁 Folder Structure
figma-quiz/
 ├── src/
 │   ├── assets/
 │   ├── components/
 │   │   ├── Quiz/
 │   │   ├── Progress.tsx
 │   │   ├── Result.tsx
 │   │   └── QuestionCard.tsx
 │   ├── App.tsx
 │   └── main.tsx
 ├── public/
 ├── README.md
 ├── package.json
 ├── tailwind.config.js
 └── vite.config.ts

📝 Assumptions

Figma layout references 1920×1080 centered canvas

Quiz is self-contained; no backend or API needed

Animations replicate Figma’s intended motion style

🕒 Time Spent
Task	Duration
UI + Layout Reproduction	3 hours
Quiz logic implementation	1 hour
Animations (scroll, fade, bubble)	1.5 hours
Debug + final polish	1 hour
👤 Author

PRAVEEN SAMPATH
Frontend Developer Intern Candidate