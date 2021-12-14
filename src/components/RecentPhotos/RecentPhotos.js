import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import classes from "./RecentPhotos.module.css";

const RecentImageLists = [
  { id: 1, category: "wild", imageUrl: "/images/gallery-images/1.jpg" },
  { id: 2, category: "wild", imageUrl: "/images/gallery-images/2.jpg" },
  { id: 3, category: "wild", imageUrl: "/images/gallery-images/3.jpg" },
  { id: 4, category: "closeup", imageUrl: "/images/gallery-images/4.jpg" },
  { id: 5, category: "wild", imageUrl: "/images/gallery-images/5.jpg" },
];

const RecentPhotos = () => {
  return (
    <div className="container mx-auto px-40 mt-10 text-center">
      <h1 className="text-xl uppercase font-extrabold tracking-widest pb-2">
        recent work
      </h1>

      <hr className="border-4 w-10 mx-auto mb-2" />
      {RecentImageLists && RecentImageLists.length && (
        <div className="grid md:grid-cols-3 my-4">
          {RecentImageLists.slice(-3).map((RecentImageList) => {
            return (
              <div className="m-4" key={RecentImageList.id}>
                <LazyLoadImage
                  alt="sample alt message"
                  src={RecentImageList.imageUrl} // use normal <img> attributes as props
                  className={classes.recentImage}
                />
              </div>
            );
          })}
        </div>
      )}
      <Link
        className="bg-green-300 hover:bg-green-400 focus:bg-green-400 p-3 rounded-lg text-white "
        to="/gallery"
      >
        View More
      </Link>
    </div>
  );
};

export default RecentPhotos;
