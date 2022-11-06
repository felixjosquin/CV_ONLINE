import React from "react";
import Logo from "./SvgIcon";

interface icon {
  color?: string;
  identifier: string;
  hover: boolean;
}

const Icon = (prop: icon) => {
  const { color, identifier, hover } = prop;
  return (
    <Logo
      name={identifier}
      classname={
        "icon" + (color ? " fill-" + color : "") + (hover ? " icon-hover" : "")
      }
    ></Logo>
  );
};

export default Icon;
