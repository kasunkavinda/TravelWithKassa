import React from "react";
import { Link } from "react-router-dom";
import classes from "./RecentPhotos.module.css";

const RecentImageLists = [
  { id: 1, imageUrl: "url(/images/gallery-images/1.jpg)" },
  { id: 2, imageUrl: "url(/images/gallery-images/2.jpg)" },
  { id: 3, imageUrl: "url(/images/gallery-images/3.jpg)" },
  { id: 4, imageUrl: "url(/images/gallery-images/3.jpg)" },
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
          {RecentImageLists.slice(0, 3).map((RecentImageList) => {
            return (
              <div
                key={RecentImageList.id}
                className={`${classes.recentImage} m-4`}
                style={{
                  backgroundImage: RecentImageList.imageUrl,
                }}
              ></div>
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
