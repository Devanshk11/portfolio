import React from "react";
import { publications } from "../../constants";

const Publications = () => {
  return (
    <section
      id="publications"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PUBLICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Research papers and technical reports in Robotics, Machine Learning, and Agriculture Tech.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-8">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="border border-gray-700 bg-gray-900 backdrop-blur-md rounded-2xl p-6 md:p-8 hover:border-purple-500 hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 relative shadow-lg"
          >
            {/* Published Badge */}
            {pub.featured && (
              <div className="absolute -top-4 -right-4">
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  ✨ Published
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {pub.title}
            </h3>

            {/* Conference/Type Info */}
            <div className="mb-4 text-sm md:text-base">
              {pub.featured ? (
                <p className="text-yellow-400 font-semibold">
                  {pub.conference}
                </p>
              ) : (
                <p className="text-purple-400 font-semibold">{pub.type}</p>
              )}
              {pub.location && (
                <p className="text-gray-500 text-sm">{pub.location}</p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              {pub.description}
            </p>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {pub.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 flex-wrap">
              <a
                href={pub.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
              >
                📄 Read Paper
              </a>
              {pub.conferenceLink && (
                <a
                  href={pub.conferenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-700 text-gray-300 hover:text-white px-6 py-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/30"
                >
                  🔗 Conference
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
