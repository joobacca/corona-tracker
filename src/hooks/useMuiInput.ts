import { ChangeEvent, useState } from "react";

function useMuiInput(options: any) {
  const {
    initialValue = '',
    validate = () => false,
    required = false,
    placeholder = '',
    helperText = '',
    type = 'text',
  } = options;
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      type,
      required,
      placeholder,
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
      helperText: value !== '' && !validate(value) && helperText,
      error: value !== '' && !validate(value),
    },
  };
}
export default useMuiInput;