import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/linkedin2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Devansh Kopra
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Robotics Engineer',
                'Data Science graduate',
                'Fullstack Developer',
                'SnapAR Developer',
                'UI/UX Designer',
                
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-4 leading-relaxed">
            I have been around computers for as long as I can remember. What started as copy-pasting code for school slowly turned into curiosity about how systems actually work — and a desire to build things, not just use them.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-4 leading-relaxed">
            I studied Data Science for its logic and problem-solving, but I realized I wanted my work to extend beyond the screen. That curiosity led me to robotics, where software meets hardware, sensing, and the real world. I enjoy working on systems that interact, adapt, and sometimes fail before they work.
          </p>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">
            Alongside this, I explore immersive technologies as a SnapAR Creator. I am especially interested in the intersection of AI, robotics, and immersive systems. If there’s one constant, it’s curiosity. Everything else is a work in progress.


          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1yf0KArrqKlgIlsyR156-_MnmHeEWCfOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-60 h-60 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Devansh Kopra"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
