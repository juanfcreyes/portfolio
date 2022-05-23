import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderWrapper, LinkButton, LinksWrapper } from "./styles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <LinkButton className="link" to="/">
        {t("nav.home")}
      </LinkButton>
      <LinksWrapper>
        <LinkButton className="link" to="dashboard">
          {t("nav.dashboard")}
        </LinkButton>
        <LinkButton className="link" to="login">
          {t("nav.admin")}
        </LinkButton>
      </LinksWrapper>
    </HeaderWrapper>
  );
};

export default Header;
