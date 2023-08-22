import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Social = () => {
  return (
    <ul>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
        <a
          href="https://www.linkedin.com/in/vadymshylov/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center w-full text-gray-300"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
        <a
          href="https://github.com/VadymShylov"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center w-full text-gray-300"
        >
          Github <FaGithub size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
        <a
          href="mailto:shylovvadym@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center w-full text-gray-300"
        >
          Email <HiOutlineMail size={30} />
        </a>
      </li>
      <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-between items-center w-full text-gray-300"
        >
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Social;
