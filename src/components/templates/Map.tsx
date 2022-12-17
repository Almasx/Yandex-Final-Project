import Location from "../molecules/Location";
import { YMaps, Map, GeoObject } from "react-yandex-maps";

const MapSection = () => {
  return (
    <YMaps>
      <div className="relative flex flex-col">
        <h2 className="mb-8 text-4xl font-bold ">Locations</h2>

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
        </Map>
      </div>
      <p className="text-behind pointer-events-none select-none lg:hidden">
        AROUND THE WORLD
      </p>
    </YMaps>
  );
};

export default MapSection;
