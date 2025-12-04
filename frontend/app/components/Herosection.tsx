import React from "react";

const Herosection = () => {
  return (
    <section className="relative h-screen w-full bg-gray-900 text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner_video_desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </section>
  );
};

export default Herosection;
