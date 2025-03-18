import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js App Router Starter',
  title: 'Next.js App Router starter with ESLint, Prettier, and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'p-40')}>{children}</body>
    </html>
  );
}
