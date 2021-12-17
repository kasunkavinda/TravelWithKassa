import React, { Suspense } from "react";
import Hero from "../Hero/Hero";
// import RecentPhotos from "../RecentPhotos/RecentPhotos";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";

const RecentPhotos = React.lazy(() => import("../RecentPhotos/RecentPhotos")); // Lazy-loaded
function HomePage() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Spinner />}>
        <RecentPhotos />
      </Suspense>
      <Footer />
    </div>
  );
}

export default HomePage;
