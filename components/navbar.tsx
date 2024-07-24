
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          {/* 7. Use Next.js's Link component to navigate to the home page. */}
          <Link href="/">Home</Link>
        </li>
        <li style={styles.li}>
          {/* 8. Link to the About page. */}
          <Link href="/about">About</Link>
        </li>
        <li style={styles.li}>
          {/* 9. Link to the Projects page. */}
          <Link href="/projects">Projects</Link>
        </li>
        <li style={styles.li}>
          {/* 10. Link to the Contact page. */}
          <Link href="/contact">Contact</Link>
        </li>

      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    aligntItems: 'center',
    padding: '1rem',
    background: '#333',
    color: '#453',
    //display: 'flex', // Flexbox layout for alignment.
    //justifyContent: 'space-between', // Space out the items evenly.
    //alignItems: 'center', // Center the items vertically.
    //padding: '1rem', // Add padding around the navbar.
    //background: '#333', // Set the background color to a dark shade.
    //color: '#fff', // Set the text color to white.
  },
  ul: {
    //listStyle: 'none', // Remove default list styling.
    //display: 'flex', // Display list items in a row.
    //margin: 0, // Remove default margin.
    //padding: 0, // Remove default padding.
  },
  li: {
    //margin: '0 1rem', // Add space between list items.
  },
};

// 12. Export the Navbar component as the default export.
export default Navbar;
