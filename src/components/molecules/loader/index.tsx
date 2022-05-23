import React from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "../../../hooks/useApp";
import { LoaderMessage, LoaderWrapper } from "./styles";
import Spinner from "../../atoms/spinner";

export const Loader = () => {
  const { notifications } = useApp();
  const loaderMessage = () => notifications[notifications.length - 1];

  if (notifications.length > 0) { 
    return (
      <LoaderWrapper>
        <Spinner></Spinner>
        <LoaderMessage>{loaderMessage()}</LoaderMessage>
      </LoaderWrapper>
    );
  } else { 
    return <></>
  }

};
