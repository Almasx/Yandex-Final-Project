import { trpc } from "../utils/trpc";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { useTranslation } from "next-i18next";

import { YMaps, Map, GeoObject, ZoomControl } from "react-yandex-maps";
import Location from "../components/molecules/Location";
import MemberSection from "../components/templates/MemberSection";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["team"], nextI18nConfig, [
      "en",
      "ru",
    ])),
  },
});

const Team = () => {
  const { t } = useTranslation("team");
  const { data } = trpc.author.getAll.useQuery();
  return (
    <>
      <section className="relative col-span-full h-screen">
        <div className="absolute h-full w-full scale-110">
          <div className="absolute inset-0 m-auto aspect-square h-5/6 object-cover dark:invert">
            <img src="/icons/circle.svg" className="opacity-70 circle-md absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" alt="white circle" />
            <div className="sun">
              <div className="dot">
                <img src="/icons/star.svg" className="w-full" alt="star" />
              </div>
            </div>
            <img src="/icons/circle.svg" className="opacity-70 circle-sm absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" alt="white circle" />
            <div className="sun-min sun">
              <div className="dot">
                <img src="/icons/star.svg" className="w-full" alt="star" />
              </div>
            </div>
            <img src="/icons/circle.svg" className="opacity-70 circle-lg absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" alt="white circle" />
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h2 className="mb-8 max-w-3xl text-center text-5xl font-bold text-dark-text dark:text-white-text md:mx-8">
            {t`hero.headline`}
          </h2>
          <p className="mb-8 max-w-lg text-center text-black/30 dark:text-white/30 md:mx-5 lg:text-lg">
            {t`hero.subheading`}
          </p>
        </div>
      </section>

      {!data && <MemberSection loading={true} />}
      {data && <MemberSection members={data} loading={false} />}

      <section className="col-span-full mb-4 h-full overflow-clip">
        <div className="relative flex flex-col">
          <h2 className="mb-8 text-4xl font-bold ">{t`map.headline`}</h2>
          <YMaps className="z-0 w-full">
            <Map
              defaultState={{ center: [55.76, 37.64], zoom: 7, controls: [] }}
              className="w-100% z-10 flex h-[700px] w-full flex-col items-center"
            >
              <ZoomControl />
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
          </YMaps>
        </div>
        <p className="text-behind pointer-events-none select-none lg:hidden">
          AROUND THE WORLD
        </p>
      </section>
      <div className="dark:invert col-span-full">
        <img src="/icons/footer-logo.svg" alt="footer logo" />
      </div>
    </>
  );
};

export default Team;
