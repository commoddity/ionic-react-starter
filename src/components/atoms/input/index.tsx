import { PasswordInput, PasswordInputProps } from "./input-password";
import { TextInput, TextInputProps } from "./input-text";

export type InputProps =
  | ({ variant: "text" } & TextInputProps)
  | ({ variant: "password" } & PasswordInputProps);

export const Input = (props: InputProps): JSX.Element => {
  const { variant } = props;
  switch (props.variant) {
    case "text":
      return <TextInput {...props} />;
    case "password":
      return <PasswordInput {...props} />;
    default:
      throw new Error(`[INPUT COMPONENT] Invalid variant [${variant}] provided`);
  }
};
