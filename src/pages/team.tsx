import { YMaps, GeoObject, Map } from "react-yandex-maps";
import MemberCard from "../components/molecules/MemberCard";
import Location from "../components/molecules/Location";

const Team = () => {
  return (
    <>
      <section className="relative col-span-full h-screen ">
        <div className="absolute h-full w-full scale-110">
          <img
            src="./images/circles.png"
            className="absolute inset-0 m-auto aspect-square h-5/6 object-cover"
            alt="circles with stars"
          />
        </div>
        {/*<div className='absolute w-full h-full bg-gradient-to-r from-slate-800 to-transparent'></div>*/}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 max-w-3xl text-center text-5xl font-bold text-white-text md:mx-8">
            Meet our team of designers and software engineers
          </h2>
          <p className="mb-8 max-w-lg text-center text-white/30 md:mx-5 lg:text-lg">
            Fermentum tellus nec volutpat non enim consequat adcsddipiscing
            euismod. Mi et tortor dolor nec eu
          </p>
        </div>
      </section>
      <div className="relative col-span-full bg-gradient-to-r  from-black via-white/30 to-black pt-[1px]">
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

      <div className="col-span-full h-screen overflow-clip">
        <div className="relative flex flex-col">
          <h2 className="mb-8 text-4xl font-bold ">Locations</h2>
          <YMaps className="z-0 w-full">
            <Map
              defaultState={{ center: [55.76, 37.64], zoom: 7, controls: [] }}
              className="w-100% z-10 flex h-[700px] w-full flex-col items-center"
            >
              <GeoObject
                geometry={{
                  type: "Point",
                  coordinates: [55.8, 37.8],
                }}
              />
              <GeoObject
                geometry={{
                  type: "Point",
                  coordinates: [56.9, 33.1],
                }}
              />
              <Location.Wrapper>
                {Array(4).fill(
                  <Location.Point
                    name="Almas Saparov"
                    address="Uralsk, Kazakhstan"
                  />
                )}
              </Location.Wrapper>
            </Map>{" "}
          </YMaps>
        </div>
        <p className="text-behind pointer-events-none select-none lg:hidden">
          AROUND THE WORLD
        </p>
      </div>

      <img src="./Logo BG.svg" alt="logo" className="col-span-full -mx-8" />
    </>
  );
};

export default Team;
