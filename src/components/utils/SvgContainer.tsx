import React from "react";
import SvgComponent from "./SvgComponent";

interface IconProp {
  identifier: string;
  hover: boolean;
  color?: { hover?: string; not_hover?: string };
  className?: string;
}

const SvgContainer = (prop: IconProp) => {
  const { identifier, hover, color } = prop;

  const fill_color = (
    hover: boolean,
    color?: { hover?: string; not_hover?: string }
  ) => {
    if (hover) {
      if (color?.hover) {
        return ` svg-hover fill-${color.hover}`;
      }
      return ` svg-hover`;
    }
    if (!hover && color?.not_hover) {
      return ` fill-${color.not_hover}`;
    }
    return "";
  };
  return (
    <div
      className={"svg-container " + prop.className + fill_color(hover, color)}
    >
      <SvgComponent identifier={identifier} />
    </div>
  );
};

export default SvgContainer;
