import { BaseCardTemplate, BaseCardTemplateProps } from "./template";

export type BaseCardProps = BaseCardTemplateProps;

export const BaseCard = (props: BaseCardProps): JSX.Element => {
  return <BaseCardTemplate {...props} />;
};
