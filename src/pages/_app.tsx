import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { type AppType } from "next/dist/shared/lib/utils";
import type { ReactElement, ReactNode } from "react";
import MainLayout from "../components/layout/main";

import "../styles/globals.css";
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

export default trpc.withTRPC(MyApp);
