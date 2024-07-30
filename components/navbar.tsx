
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    
    <nav className="bg-purple1 text-white p-4">
      <ul className="flex justify-end space-x-8">
        <li >
          {/* 7. Use Next.js's Link component to navigate to the home page. */}
          <Link href="/" className="transition-colors duration-500 ease-in-out hover:text-purple7">Home</Link>
        </li>
        <li >
          {/* 8. Link to the About page. */}
          <Link href="/about" className="transition-colors duration-500 ease-in-out hover:text-purple7">About</Link>
        </li>
        <li >
          {/* 9. Link to the Projects page. */}
          <Link href="/projects" className="transition-colors duration-500 ease-in-out hover:text-purple7">Projects</Link>
        </li>
        <li >
          {/* 10. Link to the Contact page. */}
          <Link href="/contact" className="transition-colors duration-500 ease-in-out hover:text-purple7">Contact</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
