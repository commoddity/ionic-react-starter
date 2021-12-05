import { PrimaryButton, PrimaryButtonProps } from "./button-primary";

export type ButtonProps = { variant: "primary" } & PrimaryButtonProps;

export const Button = (props: ButtonProps): JSX.Element => {
  const { variant } = props;
  switch (props.variant) {
    case "primary":
      return <PrimaryButton {...props} />;
    default:
      throw new Error(`Invalid Button variant [${variant}] provided`);
  }
};
