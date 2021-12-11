import React from "react";
import classes from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className="container mx-auto px-72 mt-24">
      <div className="m-5 grid md:grid-cols-3">
        <div
          className={`${classes.whoiamImage} m-4`}
          style={{ backgroundImage: "url(/images/who-i-am/image.jpg)" }}
        ></div>
        <div className="col-span-2 m-4">
          <h1 className="text-lg uppercase font-extrabold tracking-widest pb-2">
            Kasun Kavinda - Photographer
          </h1>
          <hr className="border-4 w-10" />
          <p className="pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
