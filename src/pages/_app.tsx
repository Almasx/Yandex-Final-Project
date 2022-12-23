import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { type AppType } from "next/dist/shared/lib/utils";
import type { ReactElement, ReactNode } from "react";
import MainLayout from "../components/layout/main";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { trpc } from "../utils/trpc";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  const layout = getLayout(<Component {...pageProps} />);

  return <>{layout}</>;
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
