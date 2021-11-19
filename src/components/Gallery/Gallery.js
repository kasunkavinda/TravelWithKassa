import React from "react";
import classes from "./Gallery.module.css";

function Gallery() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3">
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/1.jpg)",
          }}
        ></div>
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/2.jpg)",
          }}
        ></div>
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/3.jpg)",
          }}
        ></div>
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/4.jpg)",
          }}
        ></div>
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/5.jpg)",
          }}
        ></div>
        <div
          className={`${classes.galleryImage} m-4`}
          style={{
            backgroundImage: "url(/images/gallery-images/6.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
