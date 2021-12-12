import React from "react";
import classes from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className="container mx-auto md:px-72 mt-24">
      <div className="m-5 grid lg:grid-cols-3">
        <div
          className={`${classes.whoiamImage} m-4`}
          style={{ backgroundImage: "url(/images/who-i-am/image.jpg)" }}
        ></div>
        <div className="col-span-2 m-4">
          <h1 className="text-lg uppercase font-extrabold tracking-widest pb-2">
            Kasun Kavinda - Photographer
          </h1>
          <hr className="border-4 w-10" />
          <p className="font-medium mt-2">MY LIFE IN 9 HASHTAGS</p>
          <p className="decoration-pink-500">
            <span className="text-pink-500 font-medium mr-2">#1993</span>
            <span className="text-green-500 font-medium mr-2">#srilankan</span>
            <span className="text-cyan-500 font-medium mr-2">
              #instagramjunky
            </span>
            <span className="text-indigo-500 font-medium mr-2">#catlover</span>
            <span className="text-fuchsia-500 font-medium mr-2">#pizza</span>
            <span className="text-violet-500 font-medium mr-2">#cricket</span>
            <span className="text-orange-600 font-medium mr-2">
              #softwareengineer
            </span>
            <span className="text-lime-500 font-medium mr-2">#music</span>
            <span className="text-red-500 font-medium mr-2 ">#170cm</span>
          </p>
          <p className="pt-2">
            A photographer, designer. I was born and raised in a small town,
            somewhere in SriLanka, where most people are down to earth and
            focussed on their daytime routine. No wonder I developed some
            serious wanderlust. Every picture I take is part of a bigger story.
            <br />
            <br />I don’t want to pile up shootings, I want to tell my story
            with the people I meet and the places I see.
            <br />
            <br />
            Everyone can travel.Whether you're a globetrotter, couch surfer or
            stuck in a 9 to 5 job
            <br />
            <br />
            Life's too short to stay in bed.We only have one life, one
            opportunity and one goal to make the best out of it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
