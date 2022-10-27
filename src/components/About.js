import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return <div>{t("About Page")}</div>;
}

export default About;
