'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-700 shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/image.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <h1 className="text-white text-xl font-semibold">Courses</h1>
      </div>
      <ul className="flex gap-6 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
