import { trpc } from "../utils/trpc";
import FLogo from "../components/icons/footer-logo";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { useTranslation } from "next-i18next";
import Star from "../components/icons/star";

import { YMaps, Map, GeoObject } from "react-yandex-maps";
import Location from "../components/molecules/Location";
import MemberCard from "../components/molecules/MemberCard";
import Circle from "../components/icons/circle";

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
      <section className="relative col-span-full h-screen ">
        <div className="absolute h-full w-full scale-110">
          <div className="absolute inset-0 m-auto aspect-square h-5/6 object-cover">
            <Circle size="md" />
            <div className="sun">
              <div className="dot">
                <Star />
              </div>
            </div>
            <Circle size="sm" />
            <div className="sun-min sun">
              <div className="dot">
                <Star />
              </div>
            </div>
            <Circle size="lg" />
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

      <div className="relative col-span-full bg-gradient-to-r from-white via-black/30 to-white pt-[1px] dark:from-black dark:via-white/30 dark:to-black">
        <section className="flex  flex-col gap-16 bg-light-bg py-16 dark:bg-dark-bg">
          <div className="flex flex-row justify-between">
            {data &&
              data.map((member) => (
                <div
                  className="span text-8xl font-bold text-light-gray-200 dark:text-gray-200"
                  key={member.id}
                >
                  {member.name}
                </div>
              ))}
          </div>
          <div className="flex w-[500px] flex-col gap-6">
            <h3 className="text-4xl font-bold text-black/60 dark:text-white/60">
              We are team of{" "}
              <span className="text-black dark:text-white">2 engineers</span>{" "}
              and
              <span className="text-black dark:text-white">2 designers</span>
            </h3>
            <p className="text-xl text-black dark:text-white">{t`member.text`}</p>
          </div>
          <div className="grid grid-cols-4  gap-6">
            {data &&
              data.map((member) => <MemberCard key={member.id} {...member} />)}
          </div>
        </section>
      </div>

      <section className="col-span-full mb-4 h-full overflow-clip">
        <div className="relative flex flex-col">
          <h2 className="mb-8 text-4xl font-bold ">{t`map.headline`}</h2>
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
            </Map>
          </YMaps>
        </div>
        <p className="text-behind pointer-events-none select-none lg:hidden">
          AROUND THE WORLD
        </p>
      </section>

      <footer className="col-span-full -mx-8">
        <FLogo />
      </footer>
    </>
  );
};

export default Team;
