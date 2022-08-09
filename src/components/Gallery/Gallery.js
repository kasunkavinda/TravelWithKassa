import React, { useState, Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Spinner from "../Spinner/Spinner";
import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./Gallery.module.css";

const AllImageLists = [
  { id: 1, category: "wild", imageUrl: "/images/gallery-images/1.jpg" },
  { id: 2, category: "wild", imageUrl: "/images/gallery-images/2.jpg" },
  {
    id: 3,
    category: "structure",
    imageUrl: "/images/gallery-images/3.jpg",
  },
  { id: 4, category: "closeup", imageUrl: "/images/gallery-images/4.jpg" },
  { id: 5, category: "wild", imageUrl: "/images/gallery-images/5.jpg" },
  { id: 6, category: "wheels", imageUrl: "/images/gallery-images/6.jpg" },
  { id: 7, category: "closeup", imageUrl: "/images/gallery-images/7.jpg" },
  {
    id: 8,
    category: "religious",
    imageUrl: "/images/gallery-images/8.jpg",
  },
  { id: 9, category: "closeup", imageUrl: "/images/gallery-images/9.jpg" },
  { id: 10, category: "wild", imageUrl: "/images/gallery-images/10.jpg" },
  {
    id: 11,
    category: "religious",
    imageUrl: "/images/gallery-images/11.jpg",
  },
  { id: 12, category: "wild", imageUrl: "/images/gallery-images/12.jpg" },
  { id: 13, category: "wild", imageUrl: "/images/gallery-images/13.jpg" },
  { id: 14, category: "wild", imageUrl: "/images/gallery-images/14.jpg" },
  { id: 15, category: "wild", imageUrl: "/images/gallery-images/15.jpg" },
  {
    id: 16,
    category: "closeup",
    imageUrl: "/images/gallery-images/16.jpg",
  },
  { id: 17, category: "wild", imageUrl: "/images/gallery-images/17.jpg" },
  {
    id: 18,
    category: "closeup",
    imageUrl: "/images/gallery-images/18.jpg",
  },
  { id: 19, category: "wild", imageUrl: "/images/gallery-images/19.jpg" },
  { id: 20, category: "wild", imageUrl: "/images/gallery-images/20.jpg" },
  {
    id: 21,
    category: "closeup",
    imageUrl: "/images/gallery-images/21.jpg",
  },
  {
    id: 22,
    category: "wild",
    imageUrl: "/images/gallery-images/22.jpg",
  },
  {
    id: 23,
    category: "closeup",
    imageUrl: "/images/gallery-images/23.jpg",
  },
  {
    id: 24,
    category: "religious",
    imageUrl: "/images/gallery-images/24.jpg",
  },
  { id: 25, category: "wild", imageUrl: "/images/gallery-images/25.jpg" },
  { id: 26, category: "wild", imageUrl: "/images/gallery-images/26.jpg" },
  { id: 27, category: "wild", imageUrl: "/images/gallery-images/27.jpg" },
  { id: 28, category: "wild", imageUrl: "/images/gallery-images/28.jpg" },
  { id: 29, category: "wild", imageUrl: "/images/gallery-images/29.jpg" },
  {
    id: 30,
    category: "closeup",
    imageUrl: "/images/gallery-images/30.jpg",
  },
  { id: 31, category: "wild", imageUrl: "/images/gallery-images/31.jpg" },
  {
    id: 32,
    category: "closeup",
    imageUrl: "/images/gallery-images/32.jpg",
  },
  {
    id: 33,
    category: "closeup",
    imageUrl: "/images/gallery-images/33.jpg",
  },
  { id: 34, category: "wild", imageUrl: "/images/gallery-images/34.jpg" },
  { id: 35, category: "wild", imageUrl: "/images/gallery-images/35.jpg" },
  { id: 36, category: "wild", imageUrl: "/images/gallery-images/36.jpg" },
  { id: 37, category: "wild", imageUrl: "/images/gallery-images/37.jpg" },
  { id: 38, category: "wild", imageUrl: "/images/gallery-images/38.jpg" },
  { id: 39, category: "wild", imageUrl: "/images/gallery-images/39.jpg" },
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
          onClick={() => setImageList("CLOSEUP")}
        >
          Closeups
        </button>
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white"
          onClick={() => setImageList("WHEELS")}
        >
          Wheels
        </button>
        <button
          className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg mr-3 text-white"
          onClick={() => setImageList("RELIGIOUS")}
        >
          Religious
        </button>
      </div>
      <Suspense fallback={<Spinner />}>
        {AllImageLists && AllImageLists.length && ImageList === "ALL" && (
          <div className="grid md:grid-cols-3">
            {AllImageLists.map((AllImageList) => {
              return (
                <div className="m-4" key={AllImageList.id}>
                  <LazyLoadImage
                    alt="sample alt message"
                    src={AllImageList.imageUrl} // use normal <img> attributes as props
                    className={classes.galleryImage}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Suspense>
      {AllImageLists && AllImageLists.length && ImageList === "WILDLIFE" && (
        <div className="grid md:grid-cols-3">
          {AllImageLists.filter((AllImageList) => {
            return AllImageList.category === "wild";
          }).map((AllImageList) => {
            return (
              <div className="m-4" key={AllImageList.id}>
                <LazyLoadImage
                  alt="sample alt message"
                  src={AllImageList.imageUrl} // use normal <img> attributes as props
                  className={classes.galleryImage}
                />
              </div>
            );
          })}
        </div>
      )}
      <Suspense fallback={<Spinner />}>
        {AllImageLists && AllImageLists.length && ImageList === "CLOSEUP" && (
          <div className="grid md:grid-cols-3">
            {AllImageLists.filter((AllImageList) => {
              return AllImageList.category === "closeup";
            }).map((AllImageList) => {
              return (
                <div className="m-4" key={AllImageList.id}>
                  <LazyLoadImage
                    alt="sample alt message"
                    src={AllImageList.imageUrl} // use normal <img> attributes as props
                    className={classes.galleryImage}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Suspense>

      {AllImageLists && AllImageLists.length && ImageList === "WHEELS" && (
        <Suspense fallback={<Spinner />}>
          <div className="grid md:grid-cols-3">
            {AllImageLists.filter((AllImageList) => {
              return AllImageList.category === "wheels";
            }).map((AllImageList) => {
              return (
                <div className="m-4" key={AllImageList.id}>
                  <LazyLoadImage
                    alt="sample alt message"
                    src={AllImageList.imageUrl} // use normal <img> attributes as props
                    className={classes.galleryImage}
                  />
                </div>
              );
            })}
          </div>
        </Suspense>
      )}

      {AllImageLists && AllImageLists.length && ImageList === "RELIGIOUS" && (
        <div className="grid md:grid-cols-3">
          {AllImageLists.filter((AllImageList) => {
            return AllImageList.category === "religious";
          }).map((AllImageList) => {
            return (
              <div className="m-4" key={AllImageList.id}>
                <LazyLoadImage
                  alt="sample alt message"
                  src={AllImageList.imageUrl} // use normal <img> attributes as props
                  className={classes.galleryImage}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Gallery;
