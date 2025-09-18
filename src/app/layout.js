// src/app/layout.js
import React from 'react';
import { Layout as SiteLayout } from '../layout/Layout';
import { Press_Start_2P, Space_Grotesk } from 'next/font/google';
import './globals.css';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'Saif Rahman - Portfolio',
  description: 'The personal portfolio for Saif Rahman, Front-End Engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pressStart2P.variable} ${spaceGrotesk.variable}`}>
      {/* THIS IS THE FINAL FIX: We add the background color class here */}
      <body className="bg-background-1 font-main">
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}