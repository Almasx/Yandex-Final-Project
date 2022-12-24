import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import nextI18nConfig from "../../next-i18next.config.mjs";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["policy"], nextI18nConfig, [
      "en",
      "ru",
    ])),
  },
});
const Agreement = () => {
  const { t } = useTranslation("policy");
  return (
    <article className="col-span-full flex flex-col gap-4 p-12 text-lg">
      <h2 className="place-self-center text-2xl">
        <strong>Политика конфиденциальности</strong>
        <br />
      </h2>
      <h3 className="text-xl">1. {t`texts.0.header`}</h3>
      <p>
        1.1. {t`texts.0.texts.0`}
      </p>
      <p>
        1.2. {t`texts.0.texts.1`}
      </p>
      <p>
        1.3. {t`texts.0.texts.2`}
      </p>
      <p>
        1.4. {t`texts.0.texts.3`}
      </p>
      <p>
        1.5. {t`texts.0.texts.4`}
      </p>
      <p>1.6. {t`texts.0.texts.5`}</p>
      <p>
        1.6.1. {t`texts.0.texts.6`}
      </p>
      <p>
        1.6.2. {t`texts.0.texts.7`}
      </p>
      <p>
        1.6.3. {t`texts.0.texts.8`}
      </p>
      <p>
        1.6.4. {t`texts.0.texts.9`}
      </p>
      <p>
        1.6.5. {t`texts.0.texts.10`}
      </p>
      <p>
        1.6.6. {t`texts.0.texts.11`}
      </p>
      <p>
        1.6.7. {t`texts.0.texts.12`}
      </p>
      <p>
        1.6.8. {t`texts.0.texts.13`}
      </p>
      <p>
        1.6.9. {t`texts.0.texts.14`}
      </p>
      <p>
        1.6.10. {t`texts.0.texts.15`}
      </p>
      <p>
        1.6.11. {t`texts.0.texts.16`}
      </p>
      <p>
        1.6.12. {t`texts.0.texts.17`}
      </p>
      <h3 className="text-xl">2. {t`texts.1.header`}</h3>
      <p>
        2.1. {t`texts.1.texts.0`}
      </p>
      <p>
        2.1.1.{t`texts.1.texts.1`}
      </p>
      <p>
        2.1.2. З{t`texts.1.texts.2`}
      </p>
      <p>
        2.1.3. {t`texts.1.texts.3`}
      </p>
      <p>
        2.1.4. {t`texts.1.texts.4`}
      </p>
      <p>
        2.1.5. {t`texts.1.texts.5`}
      </p>
      <h3 className="text-xl">
        3. {t`texts.2.texts.0`}
      </h3>
      <p>
        3.1. {t`texts.2.texts.1`}
      </p>
      <p>
        3.2. {t`texts.2.texts.2`}
      </p>
      <p>
        3.3. {t`texts.2.texts.3`}
      </p>
      <p>
        3.4. {t`texts.2.texts.4`}
      </p>
      <h3 className="text-xl">
        4. {t`texts.3.texts.0`}
      </h3>
      <p>
        4.1. {t`texts.3.texts.1`}
      </p>
      <p>
        4.2. {t`texts.3.texts.2`}
      </p>
      <p>
        4.3. {t`texts.3.texts.3`}
      </p>
      <p>
        4.4. {t`texts.3.texts.4`}
      </p>
      <p>
        4.5. {t`texts.3.texts.5`}
      </p>
      <p>
        4.5.1. {t`texts.3.texts.6`}
      </p>
      <p>
        4.5.2. {t`texts.3.texts.7`}
      </p>
      <p>
        4.5.3. {t`texts.3.texts.8`}
      </p>
      <p>
        4.5.4. {t`texts.3.texts.9`}
      </p>
      <p>4.5.5. {t`texts.3.texts.10`}</p>
      <p>
        4.6. {t`texts.3.texts.11`}
      </p>
      <p>
        4.6.1. {t`texts.3.texts.12`}
      </p>
      <p>
        4.6.2. {t`texts.3.texts.13`}
      </p>
      <p>
        4.6.3. {t`texts.3.texts.14`}
      </p>
      <p>
        4.6.4. {t`texts.3.texts.15`}
      </p>
      <p>
        4.6.5. {t`texts.3.texts.16`}
      </p>
      <p>
        4.6.6. {t`texts.3.texts.17`}
      </p>
      <p>
        4.7. {t`texts.3.texts.18`}
      </p>
      <p>4.7.1. {t`texts.3.texts.19`}</p>
      <p>
        4.7.2. {t`texts.3.texts.20`}
      </p>
      <p>
        4.7.3. {t`texts.3.texts.21`}
      </p>
      <p>4.7.4. {t`texts.3.texts.22`}</p>
      <p>
        4.7.5. {t`texts.3.texts.23`}
      </p>
      <p>
        4.8. {t`texts.3.texts.24`}
      </p>
      <h3 className="text-xl">
        5. {t`texts.4.header`}
      </h3>
      <p>
        5.1. {t`texts.4.texts.0`}
      </p>
      <p>
        5.2. {t`texts.4.texts.1`}
      </p>
    </article>
  );
};

export default Agreement;
