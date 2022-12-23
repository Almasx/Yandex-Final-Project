import MapSection from "../components/templates/MapSection";
import MemberSection from "../components/templates/MemberSection";
import HeroSection from "../components/templates/HeroSection";
import { trpc } from "../utils/trpc";
import FLogo from "../components/icons/footer-logo";
const Team = () => {
  const { data } = trpc.author.getAll.useQuery();
  return (
    <>
      <HeroSection/>
      {!data && <MemberSection loading={true} />}
      {data && <MemberSection members={data} loading={false} />}
      <MapSection />
      <footer className="col-span-full -mx-8">
        <FLogo/>
      </footer>
    </>
  );
};

export default Team;
