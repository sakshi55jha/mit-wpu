import React from "react";

export const Programmes = () => {
  return (
    <section className="px-4 py-16 w-full bg-white text-gray-800">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-3">
        Future-Ready Programmes
      </h1>

      <div className="text-center text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover diverse, new-age programmes designed to shape future leaders.
      </div>

      <div className="flex justify-center mb-16">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Type Programme Name"
            className="w-full py-4 px-6 pr-12 bg-gray-100 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        <div
          className="box w-full sm:w-60 md:w-64 p-8 bg-white rounded-lg shadow-md border-b-4 border-blue-800 
                        text-center cursor-pointer hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <div className="text-xl font-extrabold text-blue-800 leading-snug">
            Undergraduate <br />
            Programmes
          </div>
        </div>

        <div
          className="box w-full sm:w-60 md:w-64 p-8 bg-white rounded-lg shadow-md border-b-4 border-blue-800 
                        text-center cursor-pointer hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <div className="text-xl font-extrabold text-blue-800 leading-snug">
            Postgraduate <br />
            Programmes
          </div>
        </div>

        <div
          className="box w-full sm:w-60 md:w-64 p-8 bg-white rounded-lg shadow-md border-b-4 border-blue-800 
                        text-center cursor-pointer hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <div className="text-xl font-extrabold text-blue-800 leading-snug">
            Ph.D. <br />
            Programmes
          </div>
        </div>

        <div
          className="box w-full sm:w-60 md:w-64 p-8 bg-white rounded-lg shadow-md border-b-4 border-blue-800 
                        text-center cursor-pointer hover:shadow-xl transition duration-300 hover:-translate-y-1"
        >
          <div className="text-xl font-extrabold text-blue-800 leading-snug">
            Diplomas & <br />
            Certifications
          </div>
        </div>
      </div>
    </section>
  );
};
