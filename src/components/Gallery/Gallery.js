import React from "react";
import classes from "./Gallery.module.css";
import GalleryNavigator from "./GalleryNavigator/GalleryNavigator";

const imageLists = [
  { id: 1, imageUrl: "url(/images/gallery-images/1.jpg)" },
  { id: 2, imageUrl: "url(/images/gallery-images/2.jpg)" },
  { id: 3, imageUrl: "url(/images/gallery-images/3.jpg)" },
  { id: 4, imageUrl: "url(/images/gallery-images/4.jpg)" },
  { id: 5, imageUrl: "url(/images/gallery-images/5.jpg)" },
];

function Gallery() {
  return (
    <div className="container mx-auto">
      <GalleryNavigator />
      {imageLists && imageLists.length > 0 && (
        <div className="grid md:grid-cols-3">
          {imageLists.map((imageList) => {
            return (
              <div
                key={imageList.id}
                className={`${classes.galleryImage} m-4`}
                style={{
                  backgroundImage: imageList.imageUrl,
                }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Gallery;
