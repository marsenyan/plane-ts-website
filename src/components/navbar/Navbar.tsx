import React, { useState, useEffect } from 'react';


import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

import Logo from '../../assets/logo.png';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState('navBarMenu');
  const [transparent, setTransparent] = useState('navBarTwo');

  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };

  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('navBarTwo activeHeader');
    } else {
      setTransparent('navBarTwo');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div><SiConsul className='icon' /></div>
        <div className='none flex'>
          <li className='flex'><BsPhoneVibrate className='icon' /> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon' /> Languages</li>
        </div>
        <div className='atb flex'>
          <span> Sign In</span>
          <span> Sign Up</span>
        </div>
      </div>

      <div className={transparent}>
        <div className="logoDiv">
          <img src={Logo} className='Logo' alt="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destinations</li>
          </ul>

          <button onClick={removeNavBar} className='btn btnOne flex'>
            Contact
          </button>
        </div>

        <button className='btnTwo btn'>
          Contact
        </button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
}

