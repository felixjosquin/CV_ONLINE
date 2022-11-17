import React from "react";
import { color_type } from "../../utils/type";
import SvgComponent from "./SvgComponent";

interface IconProp {
  identifier: string;
  color?: { hover?: color_type; not_hover?: color_type };
  className?: string;
}

const SvgContainer = (prop: IconProp) => {
  const { identifier, color } = prop;

  const fill_color = function (color: {
    hover?: color_type;
    not_hover?: color_type;
  }): string {
    let res = " ";
    if (color.hover) {
      res += `fill-${color.hover}-hover`;
    }
    if (color.not_hover) {
      res += `fill-${color.not_hover}-not-hover`;
    }
    return res;
  };

  return (
    <div
      className={
        "svg-container " + prop.className + (color && fill_color(color))
      }
    >
      <SvgComponent identifier={identifier} />
    </div>
  );
};

export default SvgContainer;
