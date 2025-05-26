"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Truck Marketing
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/case-studies" className="hover:text-gray-300">Case Studies</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}