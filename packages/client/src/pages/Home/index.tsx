import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Statuses } from "../../common/constants/statuses";
import Navigation from "../../common/components/molecules/Navigation";
import Map from "../../common/components/molecules/Map";

const Home = () => {
  return (
    <div className="bg-neutral-100 relative min-h-screen bg-dark-bg">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 relative content-container overflow-hidden"></main>
      <div className="relative"><Map/></div>
    </div>
  );
};

export default Home;
