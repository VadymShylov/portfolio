import React from 'react';
import { Link } from 'react-scroll';
import { dataLink } from 'data/dataLink';

const MobMenu = ({ onClick, item }) => {
  return (
    <ul
      className={
        !item
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
    >
      {dataLink.map((item, index) => (
        <li key={index} className="py-6 text-4xl">
          <Link onClick={onClick} to={item.link} smooth={true} duration={500}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobMenu;
