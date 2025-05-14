'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Provider } from 'react-redux';
import { store } from '@/features/course/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return(
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
      <Provider store={store}>       
        <Navbar/>
        <main className="continaer mx-auto px-4 py-8 min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer/>
        </Provider>
      </body>
    </html>
  )
}