import { Spinner } from "@atoms";
import { BrightnessType, ColorType, SizeType } from "@theme/types";
import { colorMixin, widthMixin } from "@theme/mixins";
import { PRIMARY_BUTTON_SIZE } from "./constants";

export type PrimaryButtonTemplateProps = {
  onClick?: () => void;
  label: string;
  stretch?: boolean;
  size?: SizeType;
  color: ColorType;
  fontColor?: string;
  brightness?: BrightnessType;
  type?: "button" | "submit";
  loading?: boolean;
  inverse?: boolean;
};

export const PrimaryButtonTemplate = ({
  onClick,
  label,
  stretch,
  size,
  color,
  fontColor,
  brightness,
  type = "button",
  loading,
  inverse,
}: PrimaryButtonTemplateProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`${widthMixin({
        table: PRIMARY_BUTTON_SIZE,
        size,
        stretch,
        centered: true,
      })}  ${colorMixin({
        element: inverse ? "border" : "background",
        color,
        usedIn: "PrimaryButton",
        brightness,
      })} py-3 text-${fontColor || "white"} rounded-lg`}
      {...(onClick && { onClick })}
    >
      <div className="flex items-center">
        {loading ? <Spinner size={25} /> : <span>{label}</span>}
      </div>
    </button>
  );
};
