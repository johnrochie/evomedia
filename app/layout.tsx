import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Evolution Media Group | Premium Digital Agency',
  description: 'We craft extraordinary digital experiences. World-class web development, design, and brand strategy.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0f0f0f] text-white">
        {children}
      </body>
    </html>
  );
}
