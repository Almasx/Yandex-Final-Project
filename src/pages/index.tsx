import { type NextPage } from "next";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Button from "../components/atoms/Button";
import Link from "next/link.js";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"], nextI18nConfig, [
      "en",
      "ru",
    ])),
  },
});

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  const headline = t`headline`.split(" | ");
  return (
    <>
      <Head>
        <title>Vatrushki</title>
        <meta name="description" content="Generated by create-t3-app " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="col-span-full my-20 flex flex-col items-center justify-center">
        <div className=" flex  flex-col text-4xl uppercase text-primary-dark dark:text-primary-light sm:text-9xl">
          <h1>
            <span className="mr-1">⬤</span>
            {headline[0]}
          </h1>
          <h1 className="relative text-right">
            <p className="absolute left-0 top-1/2 w-80 -translate-y-1/2 text-sm">
              {t`text`}
            </p>
            {headline[1]}
          </h1>
          <h1>{headline[2]}</h1>
        </div>
        <Link
        href="/contact"
      >
          <Button className="mt-6 rounded-lg font-medium">{t`cta`}</Button>
        </Link>
      </section>
    </>
  );
};

export default Home;
