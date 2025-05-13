import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return(
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar/>
        <main className="continaer mx-auto px-4 py-8 min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}