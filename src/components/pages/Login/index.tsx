import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../hooks/useApp";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { H1 } from "../../../styles/TextStyles";
import { Button } from "../../atoms/button/styles";
import { FormWrapper } from "../../atoms/form-wrapper/styles";
import { Input } from "../../atoms/input/styles";
import { ErrorDescription, LoginWraper } from "./styles";

const Login = () => {
  
  const { addNotification, removeLastNotification } = useApp();
  const { login } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { values, onChangeValue } = useForm({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | never>();

  const onLoginHandler = () => {
    setErrorMessage("");
    if (values.email.length > 0 && values.password.length > 0) {
      return sendCredentials();
    }
    setErrorMessage(t("login.error.invalid_form"));
  };

  const sendCredentials = async () => {
    try {
      addNotification(t("login.loader"))
      await login(values.email, values.password);
      navigate("../admin", { replace: true });
      removeLastNotification();
    } catch (error) {
      setErrorMessage(t("login.error.usr_pass_invalid"));
      removeLastNotification();
    }
  };

  return (
    <LoginWraper>
      <H1>{t("login.title")}</H1>
      <FormWrapper>
        {errorMessage && <ErrorDescription>{errorMessage}</ErrorDescription>}
        <Input
          type="text"
          name="email"
          value={values.email}
          onChange={onChangeValue}
          placeholder={t("login.form.email")}
        />
        <Input
          type="password"
          name="password"
          value={values.password}
          onChange={onChangeValue}
          placeholder={t("login.form.password")}
        />
        <Button block onClick={onLoginHandler}>
          {t("login.form.button")}
        </Button>
      </FormWrapper>
    </LoginWraper>
  );
};

export default Login;
