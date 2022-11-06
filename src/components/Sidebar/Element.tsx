import React, { useState } from "react";
import { useHover } from "../../utils/onHover";
import { upperFirstLetter } from "../../utils/UpperFirstLetter";
import Icon from "./Icon";
import Star from "./Star";

interface element {
  label: string;
  info?: string;
  color?: "pink" | "green" | "red" | "blue";
  rating: number;
}

const Element = (props: any) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const data: element = {
    label: "python",
    info: "A jamais les premiers",
    color: "green",
    rating: 1.5,
  };

  const stars: any = [0, 1, 2].map((index) => {
    return <Star key={index} value={data.rating - index} color={data.color} />;
  });

  return (
    <div
      className={
        "elt-container" + (data.color ? " elt-container-" + data.color : "")
      }
      ref={hoverRef}
    >
      <Icon color={data.color} identifier={data.label} hover={isHovered} />
      <div className="info-container">
        <h3>{upperFirstLetter(data.label)}</h3>
        <div className="star-container">{[...stars]}</div>
        <span>{data.info}</span>
      </div>
    </div>
  );
};

export default Element;
