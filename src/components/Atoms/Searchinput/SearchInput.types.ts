import { StandardTextFieldProps } from "@mui/material";

export interface SearchInputI {
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void  //eslint-disable-line
  textFieldProps?: StandardTextFieldProps
  onClickButton?: (value: string) => void  //eslint-disable-line
  defaultValue?: string;
  placeholder?: string;
  className?: string;
}