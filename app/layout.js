import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import LoadingScreen from "../components/LoadingScreen";

export const metadata = {
  title: "Sanjith Kalithasan | Frontend Developer",
  description:
    "Personal portfolio of Sanjith Kalithasan, an MCA student and aspiring Frontend Developer based in Krishnagiri, Tamil Nadu. Explore technical skills, academic background, internship experience, and web development projects.",
  keywords: [
    "Sanjith Kalithasan",
    "Frontend Developer",
    "MCA Student",
    "Web Developer Krishnagiri",
    "JavaScript Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Tamil Nadu",
  ],
  authors: [{ name: "Sanjith Kalithasan", url: "https://github.com/Sanjith-web" }],
  creator: "Sanjith Kalithasan",
  metadataBase: new URL("https://sanjith-kalithasan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanjith Kalithasan | Frontend Developer",
    description:
      "Personal portfolio of Sanjith Kalithasan – MCA student and aspiring Frontend Developer.",
    url: "https://sanjith-kalithasan.vercel.app",
    siteName: "Sanjith Kalithasan Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/sanjith-kalithasan.jpg",
        width: 853,
        height: 1024,
        alt: "Sanjith Kalithasan - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjith Kalithasan | Frontend Developer",
    description:
      "Personal portfolio of Sanjith Kalithasan – MCA student and aspiring Frontend Developer.",
    images: ["/sanjith-kalithasan.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('sk_theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <LoadingScreen />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
