import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../../../../hooks/useApp";
import { AboutMe } from "../../../../models/aboutme";
import { mockAboutme } from "../../../../utils/mock-response";
import { Card } from "../../../atoms/card/styles";
import { Link } from "../../../atoms/link/styles";
import { AboutMeCardWrapper, Label, RowData } from "./styles";

export const AboutMeCard = () => {
  const [aboutmeData, setAboutmeData] = useState<AboutMe | null>(null);
  const { addNotification, removeLastNotification } = useApp();
  const { t } = useTranslation();

  useEffect(() => {
    const getAboutme = async () => {
      addNotification(t("loader.text"));
      try {
        const aboutme = await mockAboutme();
        setAboutmeData(aboutme);
        removeLastNotification();
      } catch (_) {
        removeLastNotification();
      }
    };
    getAboutme();
  }, []);

  if (!aboutmeData) {
    return <></>;
  }

  return (
    <AboutMeCardWrapper>
      <Link href={aboutmeData.github} target="_blank" rel="noopener">
        <Card>
          <RowData>
            <Label>{t("about.labels.name")}</Label>
            {aboutmeData.name}
          </RowData>
          <RowData>
            <Label>{t("about.labels.birthday")}</Label>
            {new Date(aboutmeData.birthday!).toLocaleDateString()}
          </RowData>
          <RowData>
            <Label>{t("about.labels.nationality")}</Label>
            {aboutmeData.nationality}
          </RowData>
          <RowData>
            <Label>{t("about.labels.ocupation")}</Label>
            {aboutmeData.occupation}
          </RowData>
          <RowData>
            <Label>{t("about.labels.organization")}</Label>
            {aboutmeData.job}
          </RowData>
          <RowData>
            <Label>{t("about.labels.github")}</Label>
            {aboutmeData.github}
          </RowData>
        </Card>
      </Link>
    </AboutMeCardWrapper>
  );
};
