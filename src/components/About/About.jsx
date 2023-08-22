import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>Hey, I`m Vadym, nice to e-meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I`m a Junior Front-End Developer who`s passionate about building
              excellent software that improves the lives of those around. I`m
              succeed Front-End Developer with knowledge of HTML, CSS,
              JavaScript and React. I thrive in challenging and dynamic
              environments where I can help make a positive difference to both
              everyday life and business with my creative problem-solving
              skills. I am a fast learner, responsible and always up for a
              challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
