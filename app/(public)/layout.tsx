import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: 'AETHER | Elevate to Clarity',
  description: 'Transform your professional application from invisible to unmissable. Resume optimization, ATS enhancement, and career clarity.',
  keywords: ['Resume', 'ATS', 'Career', 'Professional', 'Job Application'],
  authors: [{ name: 'AETHER' }],
  openGraph: {
    title: 'AETHER | Elevate to Clarity',
    description: 'Transform your professional application from invisible to unmissable.',
    images: [
      {
        url: 'https://aether.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#4F46E5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-aether-sky-white text-aether-deep-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
