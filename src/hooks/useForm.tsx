import { useState } from "react";

export const useForm = (form: { [key: string]: string }) => {
  const [values, setValues] = useState(form);

  const onChangeValue = (event: any) => {
    setValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setValues((_) => ({ ...form }));
  };

  return { values, onChangeValue, reset, setValues };
};
