import type { ChangeEvent } from "react";
import { trpc } from "../utils/trpc";
import { useState } from "react";
import Link from "next/link";

import Button from "../components/atoms/Button";
import CheckBox from "../components/atoms/CheckBox";
import Input from "../components/atoms/Input";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact"], nextI18nConfig, [
      "en",
      "ru",
    ])),
  },
});

const Contact = () => {
  const { t } = useTranslation("contact");

  const postOffer = trpc.offer.postOffer.useMutation();
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    message: "",
    permission: false,
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    postOffer.mutate(formData);

    setFormData({
      clientName: "",
      email: "",
      message: "",
      permission: false,
    });
  };

  return (
    <>
      <section className="col-span-12 flex flex-col gap-10 py-16">
        <div
          className=" flex w-screen animate-scroll-infinite flex-row items-center gap-16
      "
        >
          {Array(4).fill(
            <>
              <header className="box-content whitespace-nowrap text-8xl text-primary-dark dark:text-primary-light md:text-[160px]">
                {t`bg`.toUpperCase()}
              </header>
              <img
                className="h-24 w-24 dark:invert md:h-32 md:w-32"
                src="/Circle.svg"
                alt="white circle"
              />
            </>
          )}
        </div>
        <h3 className="text-3xl text-primary-dark dark:text-primary-light sm:text-5xl">{t`headline`}</h3>
      </section>

      <div className="col-span-12 bg-gradient-to-r from-primary-light via-primary-dark/30  to-primary-light pt-[1px] dark:from-primary-dark dark:via-primary-light/30 dark:to-primary-dark">
        <form
          className="grid grid-cols-1 gap-8 bg-primary-light py-16 dark:bg-primary-dark sm:grid-cols-2"
          onSubmit={onSubmit}
        >
          <Input
            label={t`form.name`}
            name="name"
            max="20"
            value={formData.clientName}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientName: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <Input
            label={t`form.email`}
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <Input
            label={t`form.message`}
            name="message"
            type="textarea"
            className="col-span-full"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: (e as ChangeEvent<HTMLInputElement>).target.value,
              })
            }
          />
          <CheckBox
            active={formData.permission || false}
            onClick={() =>
              setFormData((previos) => ({
                ...previos,
                permission: !previos.permission,
              }))
            }
          >
            {t`form.permission`.split("/")[0]}
            <Link href="policy" className="underline">
              {t`form.permission`.split("/")[1]}
            </Link>
          </CheckBox>
          <div className="col-span-full">
            <Button
              className="mt-16 w-56 rounded-full py-4 text-2xl font-normal"
              variant="secondary"
              type="submit"
            >
              {t`form.submit`}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
