
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-end space-x-8">
        <li >
          {/* 7. Use Next.js's Link component to navigate to the home page. */}
          <Link href="/" className="transition-colors duration-500 ease-in-out hover:text-blue-300">Home</Link>
        </li>
        <li >
          {/* 8. Link to the About page. */}
          <Link href="/about">About</Link>
        </li>
        <li >
          {/* 9. Link to the Projects page. */}
          <Link href="/projects">Projects</Link>
        </li>
        <li >
          {/* 10. Link to the Contact page. */}
          <Link href="/contact">Contact</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
