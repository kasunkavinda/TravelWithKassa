import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="filter brightness-50"
        style={{
          backgroundImage: "url(/images/hero-image/hero-image.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "calc(350px + 7vw)",
        }}
      ></div>
      <div className="absolute left-1/2 top-72">
        <div className="relative -left-1/2 text-white">
          <p className="text-3xl text-center font-semibold font-serif">
            If you see something that moves you, and then snap it, you keep a
            moment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
