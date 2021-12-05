import { PasswordInputTemplate, PasswordInputTemplateProps } from "./template";

export type PasswordInputProps = PasswordInputTemplateProps;

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  return <PasswordInputTemplate {...props} />;
};
