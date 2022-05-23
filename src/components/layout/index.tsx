import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { themes } from "../../styles/ColorStyles";
import { Loader } from "../molecules/loader";
import GlobalStyle from './../../styles/GlobalStyle';
import Header from "./header";

const Layout = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="theme-color"
          content={themes.light.primary}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={themes.dark.primary}
          media="(prefers-color-scheme: dark)"
        />
      </Helmet>
      <GlobalStyle/>
      <Header></Header>
      <Loader></Loader>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
