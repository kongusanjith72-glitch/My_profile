# Sanjith Kalithasan – Personal Portfolio Website

A modern, high-performance, and responsive personal portfolio website for **Sanjith Kalithasan**, an aspiring Frontend Developer and MCA student based in Krishnagiri, Tamil Nadu, India.

Built with **Next.js (JavaScript)**, external **CSS Modules**, and custom SVG icons without Tailwind or inline CSS.

---

## 🌟 Key Features

- **Modern Visual Design:** Deep navy/charcoal dark theme with refined purple (`#8b5cf6`) and blue (`#3b82f6`) accent colors.
- **Theme Toggle:** Effortless switching between dark and light themes with preference persistence.
- **Dynamic Typing Animation:** Subtle role cycling in the hero section ("Frontend Developer", "MCA Student", "Web Development Enthusiast", "UI/UX Design Enthusiast") that respects user reduced-motion preferences.
- **Brand Loading Experience:** Short KS initials loading screen with smooth fade-out.
- **Centralized Data File:** All personal details, editable skill percentages, education, internship takeaways, and projects are centralized in [`data/portfolioData.js`](file:///c:/Users/kongu/OneDrive/Desktop/my_profile_webpage/data/portfolioData.js) for effortless updates.
- **Direct Contact Integrations:**
  - One-click `mailto:` email action with a separate **Copy Email** button providing instant clipboard feedback.
  - One-click `tel:` calling and direct **WhatsApp chat** integration (`wa.me`).
- **Responsive Navigation:** Smooth-scrolling navigation bar with active section indicator, gracefully adaptive on tablets and mobile without relying on an unnecessary hamburger menu.
- **Verified Content Only:**
  - MCA (2025–2027) at Karpagam Academy of Higher Education & BCA (Completed 2025) at Sri Vidya Mandir Arts and Science College.
  - Realistic proficiency percentages for HTML, CSS, JavaScript, Java, and MySQL.
  - Web Development Internship at the National Small Industries Corporation (NSIC).
  - Clean project showcase without unverified links or placeholder screenshots.
  - Diploma in Computer Application (DCA) from Computer Software College (CSC).
- **Resume Download:** Direct link to your resume (`public/resume.pdf` & `public/assets/resume.pdf`).
- **Profile Photograph:** Portrait integrated in Hero & About sections (`public/sanjith-kalithasan.jpg`).
- **SEO & Social Sharing:** Full Open Graph metadata, semantic HTML5 tags, accessibility labels, and custom favicon.
- **Custom 404 Page:** Dedicated 404 error page with quick navigation back to home.

---

## 📁 Project Structure

```text
my_profile_webpage/
├── app/
│   ├── layout.js              # Root layout, SEO metadata, fonts, theme script
│   ├── page.js                # Main portfolio page composing all sections
│   ├── not-found.js           # Custom 404 page with home link
│   └── icon.svg               # Vector KS brand favicon
├── components/
│   ├── About.js               # About me & career objective
│   ├── Achievements.js        # Technical workshops & seminars
│   ├── BackToTop.js           # Floating smooth-scroll back to top
│   ├── Certifications.js      # DCA certification card
│   ├── Contact.js             # Email, Call, WhatsApp & location
│   ├── CurrentlyLearning.js   # Advanced JS, React, Next.js, UI/UX, Spring Boot
│   ├── Education.js           # MCA and BCA degree cards
│   ├── Footer.js              # Social links, quick nav, dynamic copyright
│   ├── Hero.js                # Hero section, typing effect, CTA buttons
│   ├── Icons.js               # Accessible, custom SVG icon components
│   ├── Internship.js          # NSIC Web Development Internship details
│   ├── LoadingScreen.js       # Short KS initials loading animation
│   ├── Navbar.js              # Responsive header navigation
│   ├── Projects.js            # Curated projects (EventHub, Attendance, CocoNet)
│   ├── Skills.js              # Technical skills with progress bars
│   ├── ThemeToggle.js         # Dark/Light mode switch
│   └── WhatICanDo.js          # 6 core frontend & web design capabilities
├── data/
│   └── portfolioData.js       # Centralized editable content & configuration
├── public/
│   ├── favicon.svg            # Custom KS purple-blue gradient favicon
│   └── placeholder-profile.svg# Professional replaceable profile graphic
├── styles/
│   ├── globals.css            # CSS theme variables, resets, reduced motion
│   └── *.module.css           # Modular external CSS stylesheets for each component
├── next.config.js             # Next.js production configuration
└── package.json               # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation & Local Development

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To build the static production bundle:

```bash
npm run build
npm start
```

---

## ✏️ Customizing Portfolio Information

To modify any information, update the relevant fields in [`data/portfolioData.js`](file:///c:/Users/kongu/OneDrive/Desktop/my_profile_webpage/data/portfolioData.js):

- **Profile Picture:** Place your photo in the `public/` directory (e.g. `public/sanjith.jpg`) and update `profilePhoto: "/sanjith.jpg"` in `data/portfolioData.js`.
- **Project Repositories:** When individual project repositories are published, add their GitHub URL directly to `githubUrl` inside `projectsData`.
- **Skill Levels:** Adjust the `level` property (0 to 100) inside `technicalSkills`.

---

## 🚢 Deployment to Vercel

This Next.js application is pre-configured for one-click deployment to Vercel:

1. Push your code to your GitHub repository: `https://github.com/kongusanjith72-glitch/My_profile`.
2. Go to [vercel.com](https://vercel.com/sanjith-webs-projects) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Leave build settings as default (`Framework Preset: Next.js`).
5. Click **Deploy**.
