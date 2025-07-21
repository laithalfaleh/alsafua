// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// -- Component for the Navbar --
const Navbar = () => (
  <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" legacyBehavior>
        <a className="text-2xl font-bold text-[#B49B6E] hover:opacity-90">
          مجموعة الصفوة
        </a>
      </Link>
      <div className="hidden md:flex space-x-6 space-x-reverse items-center">
        <Link href="/"><a className="hover:text-[#B49B6E] transition-colors">الرئيسية</a></Link>
        <Link href="/about"><a className="hover:text-[#B49B6E] transition-colors">من نحن</a></Link>
        <Link href="/services"><a className="hover:text-[#B49B6E] transition-colors">خدماتنا</a></Link>
        <Link href="/contact"><a className="bg-[#B49B6E] text-gray-900 py-2 px-4 rounded-md hover:bg-opacity-80 transition-all font-semibold">اطلب استشارة</a></Link>
      </div>
    </div>
  </nav>
);

// -- Component for the Footer --
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} مجموعة الصفوة للقانون والمحاماة والتحكيم. جميع الحقوق محفوظة.</p>
      <p className="mt-2 text-sm">تصميم وتطوير بواسطة [اسمك أو اسم شركتك هنا]</p>
    </div>
  </footer>
);

// -- The Main Layout Component --
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div dir="rtl" className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>مجموعة الصفوة للقانون والمحاماة والتحكيم</title>
        <meta name="description" content="خدمات قانونية احترافية في الأردن" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
