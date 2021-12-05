import {
  PasswordShowIcon,
  PasswordShowIconProps,
  PasswordHideIcon,
  PasswordHideIconProps,
} from "./template";

export type IconVariantType = "passwordShow" | "passwordHide";

export type IconProps =
  | ({ variant: "passwordShow" } & PasswordShowIconProps)
  | ({ variant: "passwordHide" } & PasswordHideIconProps);

export const Icon = (props: IconProps): JSX.Element => {
  const { variant } = props;
  switch (props.variant) {
    case "passwordShow":
      return <PasswordShowIcon {...props} />;
    case "passwordHide":
      return <PasswordHideIcon {...props} />;
    default:
      throw new Error(`Invalid Icon variant [${variant}] used`);
  }
};
