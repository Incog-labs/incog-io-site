import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\/|\/$/g, '')}`
  : '';
const withBasePath = (path: string) => `${basePath}${path}`;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Incog',
  description: 'IncognitoVerse coming soon',
  icons: {
    icon: [
      {
        url: withBasePath('/favicon-dark.png'),
        media: '(prefers-color-scheme: light)',
      },
      { url: withBasePath('/favicon.ico'), media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: withBasePath('/favicon.ico'),
    apple: withBasePath('/favicon.ico'),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
