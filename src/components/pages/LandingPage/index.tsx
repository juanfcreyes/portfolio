import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useTranslation } from "react-i18next";
import { LandingPageWrapper, LottieWrapper, Tittle } from "./styles";

const playerProps = {
  autoplay: true,
  loop: true,
  src: "https://assets9.lottiefiles.com/packages/lf20_v9riyrep.json",
  style: {
    height: "100%",
    width: "100%",
  },
} as const;

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LandingPageWrapper>
        <Tittle>{t("landing.title")}</Tittle>
      </LandingPageWrapper>
      <LottieWrapper>
        <Player {...playerProps} />
      </LottieWrapper>
    </div>
  );
};

export default LandingPage;
