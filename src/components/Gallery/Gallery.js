import React, { useState } from "react";
import classes from "./Gallery.module.css";

const AllImageLists = [
  { id: 1, imageUrl: "url(/images/gallery-images/1.jpg)" },
  { id: 2, imageUrl: "url(/images/gallery-images/2.jpg)" },
  { id: 3, imageUrl: "url(/images/gallery-images/3.jpg)" },
  { id: 4, imageUrl: "url(/images/gallery-images/4.jpg)" },
  { id: 5, imageUrl: "url(/images/gallery-images/5.jpg)" },
];

const WildlifeImageLists = [
  { id: 1, imageUrl: "url(/images/gallery-images/1.jpg)" },
  { id: 2, imageUrl: "url(/images/gallery-images/2.jpg)" },
  { id: 3, imageUrl: "url(/images/gallery-images/3.jpg)" },
  { id: 5, imageUrl: "url(/images/gallery-images/5.jpg)" },
];

const ObjectImageLists = [
  { id: 4, imageUrl: "url(/images/gallery-images/4.jpg)" },
];

function Gallery() {
  const [ImageList, setImageList] = useState("ALL");
  return (
    <div className="container mx-auto mt-24">
      <div className="m-4 grid md:grid-cols-6 ">
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white "
          onClick={() => setImageList("ALL")}
        >
          All
        </button>
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white"
          onClick={() => setImageList("WILDLIFE")}
        >
          WildLife
        </button>
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white"
          onClick={() => setImageList("OBJECTS")}
        >
          Closeups
        </button>
      </div>
      {AllImageLists && AllImageLists.length && ImageList === "ALL" && (
        <div className="grid md:grid-cols-3">
          {AllImageLists.map((AllImageList) => {
            return (
              <div
                key={AllImageList.id}
                className={`${classes.galleryImage} m-4`}
                style={{
                  backgroundImage: AllImageList.imageUrl,
                }}
              ></div>
            );
          })}
        </div>
      )}
      {WildlifeImageLists &&
        WildlifeImageLists.length &&
        ImageList === "WILDLIFE" && (
          <div className="grid md:grid-cols-3">
            {WildlifeImageLists.map((WildlifeImageList) => {
              return (
                <div
                  key={WildlifeImageList.id}
                  className={`${classes.galleryImage} m-4`}
                  style={{
                    backgroundImage: WildlifeImageList.imageUrl,
                  }}
                ></div>
              );
            })}
          </div>
        )}
      {ObjectImageLists && ObjectImageLists.length && ImageList === "OBJECTS" && (
        <div className="grid md:grid-cols-3">
          {ObjectImageLists.map((ObjectImageList) => {
            return (
              <div
                key={ObjectImageList.id}
                className={`${classes.galleryImage} m-4`}
                style={{
                  backgroundImage: ObjectImageList.imageUrl,
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
