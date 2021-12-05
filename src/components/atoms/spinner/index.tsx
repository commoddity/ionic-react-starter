import { SpinnerTemplate, SpinnerTemplateProps } from "./template";

export type LinkButtonProps = SpinnerTemplateProps;

export const Spinner = (props: SpinnerTemplateProps): JSX.Element => {
  return <SpinnerTemplate {...props} />;
};
