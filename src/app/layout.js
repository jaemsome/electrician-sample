import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
