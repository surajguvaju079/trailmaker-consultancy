import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    template: "| Trailmaker Consultancy",
  },
  description:
    "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",
  keywords: "study abroad, education consultancy, Nepal, student visa, IELTS, PTE, TOEFL, university application, scholarship",
  authors: [{ name: "Trailmaker Consultancy" }],
  creators: [{ name: "Trailmaker Consultancy" }],
  publisher: "Trailmaker Consultancy",
  format: "website",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googlebot: "index, follow",
  },
  metadataBase: new URL("https://www.trailmakerchadanichowk.com.np"),
  openGraph: {
    title: "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    description:
      "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",
    url: "https://www.trailmakerchadanichowk.com.np",
    siteName: "Trailmaker Consultancy",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Trailmaker Consultancy - Study Abroad Experts",
      },
    ],
    type: "website",
    locale: "en_NP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    description:
      "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",
    images: ["/logo.jpeg"],
    creator: "@trailmakernp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trailmaker Consultancy",
    "url": "https://www.trailmakerchadanichowk.com.np",
    "logo": "/logo.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+977-98-0000-0000",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/trailmakerconsultancy",
      "https://www.instagram.com/trailmakerconsultancy"
    ]
  }
  }
  </script>
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        {jsonLd}
      </body>
    </html>
  );
}
