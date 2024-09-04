
import React, {useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };
  return (
    
    <nav className="bg-purple1 text-white p-4">
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <Link href="/" >andrew.</Link> 

        </div>
        
        <div className = "block md:hidden">
          <FontAwesomeIcon 
          style={{fontSize: "25px", cursor: 'pointer'}}
          icon={menuOpen ? faTimes : faBars}
          onClick={toggleMenu}
          />
        </div>

        <ul className={`md:flex space-x-8 ${menuOpen ? 'flex flex-col items-center' : 'hidden' } md:block`}>

          <li >
            <Link href="/Home" className="transition-colors duration-500 ease-in-out hover:text-purple7">Home</Link>
          </li>
          <li >
            <Link href="/about" className="transition-colors duration-500 ease-in-out hover:text-purple7">About</Link>
          </li>
          <li >
            <Link href="/projects" className="transition-colors duration-500 ease-in-out hover:text-purple7">Projects</Link>
          </li>
          <li >
            <Link href="/contact" className="transition-colors duration-500 ease-in-out hover:text-purple7">Contact</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
