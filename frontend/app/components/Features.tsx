import React from "react";

const Features = () => {
  return (
    <section className="px-4 py-16 w-full bg-white text-gray-800">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-3">
        43+ Years Legacy of Academic Excellence
      </h1>

      <div className="text-center text-lg text-gray-600 mb-16">
        A University of Life Transformation
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        <div className="box w-full sm:w-56 p-6 mx-0 bg-white rounded-xl shadow-lg border-b-4 border-red-500 hover:shadow-xl transition duration-300">
          <div className="text-3xl lg:text-4xl font-extrabold text-red-600 mb-2">
            150+
          </div>
          <p className="text-base text-gray-700 font-medium">
            Future-ready programmes
          </p>
        </div>

        <div className="box w-full sm:w-56 p-6 mx-0 bg-white rounded-xl shadow-lg border-b-4 border-red-500 hover:shadow-xl transition duration-300">
          <div className="text-3xl lg:text-4xl font-extrabold text-red-600 mb-2">
            25,000+
          </div>
          <p className="text-base text-gray-700 font-medium">
            Students on Campus
          </p>
        </div>

        <div className="box w-full sm:w-56 p-6 mx-0 bg-white rounded-xl shadow-lg border-b-4 border-red-500 hover:shadow-xl transition duration-300">
          <div className="text-3xl lg:text-4xl font-extrabold text-red-600 mb-2">
            100+
          </div>
          <p className="text-base text-gray-700 font-medium">Students Clubs</p>
        </div>

        <div className="box w-full sm:w-56 p-6 mx-0 bg-white rounded-xl shadow-lg border-b-4 border-red-500 hover:shadow-xl transition duration-300">
          <div className="text-3xl lg:text-4xl font-extrabold text-red-600 mb-2">
            2000+
          </div>
          <p className="text-base text-gray-700 font-medium">
            Industry Connects
          </p>
        </div>

        <div className="box w-full sm:w-56 p-6 mx-0 bg-white rounded-xl shadow-lg border-b-4 border-red-500 hover:shadow-xl transition duration-300">
          <div className="text-3xl lg:text-4xl font-extrabold text-red-600 mb-2">
            100,000+
          </div>
          <p className="text-base text-gray-700 font-medium">
            Global Alumni Network
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
