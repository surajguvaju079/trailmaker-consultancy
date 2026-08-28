import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.trailmakerchadanichowk.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    template: "%s | Trailmaker Consultancy",
  },

  description:
    "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",

  keywords: [
    "study abroad",
    "education consultancy",
    "Nepal",
    "student visa",
    "IELTS",
    "PTE",
    "TOEFL",
    "university application",
  ],

  authors: [{ name: "Trailmaker Consultancy" }],
  publisher: "Trailmaker Consultancy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    description:
      "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",
    url: siteUrl,
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
    title:
      "Trailmaker Consultancy | Study Abroad & Education Consultancy in Nepal",
    description:
      "Trailmaker Consultancy helps Nepali students study abroad — from counselling and test preparation to university applications, visa guidance and pre-departure support.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trailmaker Consultancy",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpeg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+977-11-664371",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/people/Trailmaker-Chadanichowk-educational-consultancy-Banepa/100065606254468/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}