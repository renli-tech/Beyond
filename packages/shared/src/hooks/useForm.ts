import * as React from "react";

export interface FormConfig {
  initialValues: {
    [key: string]: unknown;
  };
  onSubmit: () => void;
  validate: (values: { [key: string]: unknown }) => void;
}

export interface UseFormReturn {
  values: {
    [key: string]: unknown;
  };
  onSubmit: () => void;
  handleChange: () => void;
}

export const useForm = (formConfig: FormConfig): UseFormReturn => {
  const { initialValues, onSubmit: onSubmitFn, validate } = formConfig;
  const [values, setValues] = React.useState(initialValues);

  const onSubmit = React.useCallback(() => {
    console.log("submitted");
    onSubmitFn();
  }, []);

  const handleChange = React.useCallback(() => {
    console.log("values changed");
    validate(values);
    setValues(initialValues);
  }, [values]);

  return { values, onSubmit, handleChange };
};
