import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Volt Electrics | Licensed Electrician Parramatta NSW',
  description:
    'Licensed electrician in Parramatta, NSW. Available 7 days, same day service, no call-out fee. Call (02) 9123 4567 for a free quote.',
  keywords:
    'electrician Parramatta, licensed electrician NSW, emergency electrician, switchboard upgrade, electrical inspection',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
