import MapSection from "../components/templates/MapSection";
import MemberSection from "../components/templates/MemberSection";
import HeroSection from "../components/templates/HeroSection";
import { trpc } from "../utils/trpc";
const Team = () => {
  const { data } = trpc.author.getAll.useQuery();

  return (
    <>
      <HeroSection />
      {<MemberSection members={data} />}
      <MapSection />
      <footer className="col-span-full -mx-8">
        <img src="./Logo BG.svg" alt="logo" />
      </footer>
    </>
  );
};

export default Team;
