import MemberCard from "../components/molecules/MemberCard";
import Map from "../components/templates/Map";

const Team = () => {
  return (
    <div className="relative col-span-full ">
      <div className="bg-gradient-to-r from-black via-white/30  to-black pt-[1px]">
        <section className="flex  flex-col gap-16 bg-dark-bg py-16">
          <div className="flex flex-row justify-between">
            <div className="span text-8xl font-bold text-gray-200">Almas</div>
            <div className="span text-8xl font-bold text-gray-200">Danya</div>
            <div className="span text-8xl font-bold text-gray-200">Mary</div>
            <div className="span text-8xl font-bold text-gray-200">Vova</div>
          </div>
          <div className="flex w-[500px] flex-col gap-6">
            <h3 className="text-4xl font-bold text-white/60">
              We are team of <span className="text-white">2 engineers</span> and{" "}
              <span className="text-white">2 designers</span>
            </h3>
            <p className="text-xl text-white">
              Fermentum tellus nec volutpat non enim consequat adcsddipiscing
              euismod. Mi et tortor dolor nec eu rtor dolor nec eur tor dolor
              nec eu
            </p>
          </div>
          <div className="flex flex-row justify-between gap-6">
            {Array(4).fill(<MemberCard></MemberCard>)}
          </div>
        </section>
      </div>

      <div className="grid h-screen place-items-center">
        <Map />
      </div>
    </div>
  );
};

export default Team;
