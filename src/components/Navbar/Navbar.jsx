import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo1.png';
import { Link } from 'react-scroll';
import MobMenu from './MobMenu';
import { dataLink } from 'data/dataLink';
import Social from './Social';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Img" style={{ width: '200px' }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex ">
        {dataLink.map((item, index) => (
          <li key={index}>
            <Link to={item.link} smooth={true} duration={500}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hemburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mob menu */}
      <MobMenu onClick={handleClick} item={nav} />
      {/* Social icons */}
      <div className="hidden  fixed flex-col top-[35%] left-0 lg:flex">
        <Social />
      </div>
    </div>
  );
};

export default Navbar;
