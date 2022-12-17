import Location from "./Location";

const Map = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col relative">
        <h2 className="text-white-text font-bold text-4xl mb-8">Locations</h2>
        <div
          className="w-100% h-[700px] flex flex-col items-center z-10"
          id="map"
        >
          <Location.Wrapper>
            {Array(4).fill(
              <Location.Point
                name="Almas Saparov"
                address="Uralsk, Kazakhstan"
              />
            )}
          </Location.Wrapper>
        </div>
      </div>
      <p className="text-behind lg:hidden select-none pointer-events-none">
        AROUND THE WORLD
      </p>
    </div>
  );
};

export default Map;
