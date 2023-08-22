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
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Vadym Shylov, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I`m Junior Front-End Developer and also I passionate about
              building excellent software that improves the lives of those
              around meI am an passionate Front-End developer with knowledge of
              HTML, CSS, JavaScript and React. I thrive in challenging and
              dynamic environments where I can help make a positive difference
              to both everyday life and business with my creative
              problem-solving skills. I am a fast learner, responsible and
              always up for a challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
