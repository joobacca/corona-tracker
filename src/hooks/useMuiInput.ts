import { ChangeEvent, useState } from "react";

interface MuiInputOptions {
  initialValue: string,
  validate: ((value: string) => boolean) | (() => boolean),
  required: boolean,
  placeholder: string,
  helperText: string,
  type: string,
}

function useMuiInput(options: Partial<MuiInputOptions>) {
  const {
    initialValue = '',
    validate = () => false,
    required = false,
    placeholder = '',
    helperText = '',
    type = 'text',
  } = options;
  const [value, setValue] = useState(initialValue);
  const [allowValidation, setAllowValidation] = useState(false);
  const error: boolean = (allowValidation || !!value) && !validate(value);

  return {
    value,
    setValue,
    reset: () => {
      setAllowValidation(false);
      setValue('');
    },
    setAllowValidation,
    allowValidation,
    error,
    bind: {
      type,
      required,
      placeholder,
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
      onBlur: () => setAllowValidation(true),
      helperText: error && !validate(value) && helperText,
      error,
    },
  };
}
export default useMuiInput;