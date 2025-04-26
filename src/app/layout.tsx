import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/lib/Providers';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-deep-blue via-primary-blue to-secondary-blue antialiased`}>
        <Providers>
          <div className="min-h-screen backdrop-blur-sm">
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
