import React from "react";

// https://stackoverflow.com/questions/9649706/css3-box-shadow-linear-gradient

const ColorBoxShadow = function (prop: {
  children: React.ReactElement;
  colors: string[];
}) {
  const color_shadow = function (colors: string[]): string {
    const nb_color = colors.length;
    const color_string = colors.reduce((prev, color, index) => {
      const percentage =
        nb_color > 1 ? Math.round((index * 50) / (nb_color - 1)) + 50 : 50;
      return (
        prev + `${color} ${percentage}%` + (index + 1 === nb_color ? ")" : ",")
      );
    }, "linear-gradient(to top left,black 50%,");
    return color_string;
  };

  return (
    <div
      className="color_border"
      style={{ backgroundImage: color_shadow(prop.colors) }}
    >
      {prop.children}
    </div>
  );
};

export default ColorBoxShadow;
