import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 items-center ">
        <div className="max-w-2xl py-20">
          <h1 className="text-4xl sm:text-6xl font-bold ">
            We are changing the way people shop
          </h1>
          <p className="mt-8 text-lg  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            voluptate, voluptatum, quidem, quod doloremque quos quae quibusdam
            nesciunt repellendus distinctio autem.
          </p>
          <button className="btn btn-primary mt-8">Our Products</button>
        </div>
        <div className=" hidden h-[28rem] lg:carousel lg:carousel-center bg-neutral rounded-box  space-x-4 p-4">
          <div className="carousel-item">
            <img src={hero1} className="rounded-box h-full w-80 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero2} className="rounded-box h-full w-80 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero3} className="rounded-box h-full w-80 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero4} className="rounded-box h-full w-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
