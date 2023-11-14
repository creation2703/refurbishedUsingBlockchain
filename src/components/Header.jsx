// Header.js

import React from 'react';
import Logo from '/Users/ryuk/Documents/refurbishedProducts/src/assets/Logo.png';
import MetamaskLogo from '/Users/ryuk/Documents/refurbishedProducts/src/assets/Metamask.png';
import '/Users/ryuk/Documents/refurbishedProducts/src/index.css';

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center py-2 mx-auto" style={{ height: '3.5vh', background: 'rgba(0, 0, 0, 0.6)' }}>
      <img className="w-4 cursor-pointer" src={Logo} alt="logo" style={{ width: '2vw', height: 'auto', margin: '1%' }} />
      <ul className="text-white hidden md:flex list-none justify-center items-center">
        <li className='mx-2 md:mx-4 cursor-pointer text-base font-roboto listItem' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '80%' }}>Market</li>
        <li className='mx-2 md:mx-4 cursor-pointer text-base font-roboto listItem' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '80%' }}>Artist</li>
        <li className='mx-2 md:mx-4 cursor-pointer text-base font-roboto listItem' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '80%' }}>Features</li>
        <li className='mx-2 md:mx-4 cursor-pointer text-base font-roboto listItem' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', fontSize: '80%' }}>Community</li>
      </ul>
      <img className="cursor-pointer ml-2" src={MetamaskLogo} alt="Metamask" style={{ width: '20px', height: '20px', margin: '0.5%' }} />
    </div>
  );
}

export default Header;
