import { BaseCard, BaseCardProps } from "./card-base";

export type CardProps = { variant: "partner" } & BaseCardProps;

export const Card = (props: CardProps): JSX.Element => {
  switch (props.variant) {
    case "partner":
      return <BaseCard {...props} />;
    default:
      throw new Error(`[CARD ERROR] Invalid variant provided`);
  }
};
