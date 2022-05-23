import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "../../../hooks/useForm";
import { Button } from "../../atoms/button/styles";
import { FormWrapper } from "../../atoms/form-wrapper/styles";
import { Input } from "../../atoms/input/styles";
import { AdminWrapper, ButtonWrapper } from "./styles";

const Admin = () => {
  const { t } = useTranslation();

  const { values, onChangeValue, reset } = useForm({
    title: "",
    description: "",
    link: "",
    tags: "",
    version: "",
  });

  const onClickSend = () => {
    console.log("values", values);
  };

  const onClickCancel = () => {
    reset();
  };

  return (
    <AdminWrapper>
      <FormWrapper>
        <Input
          type="text"
          name="title"
          value={values.title}
          onChange={onChangeValue}
          placeholder={t("admin.form.title")}
        />
        <Input
          type="text"
          name="description"
          value={values.description}
          onChange={onChangeValue}
          placeholder={t("admin.form.description")}
        />
        <Input
          type="text"
          name="link"
          value={values.link}
          onChange={onChangeValue}
          placeholder={t("admin.form.link")}
        />
        <Input
          type="text"
          name="tags"
          value={values.tags}
          onChange={onChangeValue}
          placeholder={t("admin.form.tags")}
        />
        <Input
          type="text"
          name="version"
          value={values.version}
          onChange={onChangeValue}
          placeholder={t("admin.form.version")}
        />
        <ButtonWrapper>
          <Button width="8rem" variant="danger" onClick={onClickCancel}>
            {t("admin.form.buttons.cancel")}
          </Button>
          <Button width="8rem" onClick={onClickSend}>
            {t("admin.form.buttons.send")}{" "}
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </AdminWrapper>
  );
};

export default Admin;
