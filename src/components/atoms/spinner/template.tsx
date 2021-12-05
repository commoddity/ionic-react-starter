import Loader from "react-loader-spinner";

export type SpinnerTemplateProps = { size?: number };

export const SpinnerTemplate = ({
  size,
}: SpinnerTemplateProps): JSX.Element => {
  return <Loader type="Oval" color="#FFFFFF" height={size} width={size} />;
};
