import React, { useEffect, useRef, useState } from "react";
import { color_type } from "../../utils/type";
import { upperFirstLetter } from "../../utils/UpperFirstLetter";
import ColorBoxShadow from "../utils/ColorBoxShadow";
import SvgContainer from "../utils/SvgContainer";
import Star from "./Star";

interface ElementProp {
  svg_identifier?: string;
  label: string;
  info?: string;
  color?: { hover?: color_type; not_hover?: color_type };
  rating: number;
}

const Element = (props: ElementProp) => {
  const [colorLogo, setColorLogo] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  const { svg_identifier, label, info, color, rating } = props;

  useEffect(() => {
    if (ref.current) {
      const style = ref.current.querySelector(
        ".svg-container style"
      )?.textContent;

      if (style) {
        const colors: string[] = style.split(" ").map((text) => {
          const match = text.match("#[1-9abcdefABCDEF]{6}");
          return match ? match[0] : "";
        });
        setColorLogo(colors);
      }
    }
  }, [ref]);

  const stars: any = [0, 1, 2].map((index) => {
    return <Star key={index} value={rating - index} color={color} />;
  });

  return (
    <ColorBoxShadow colors={colorLogo}>
      <div className="elt-container" ref={ref}>
        {svg_identifier && (
          <SvgContainer
            className="logo"
            color={color}
            identifier={svg_identifier}
          />
        )}
        <div className="info-container">
          <h3>{upperFirstLetter(label)}</h3>
          <div className="star-container">{[...stars]}</div>
          <span>{info}</span>
        </div>
      </div>
    </ColorBoxShadow>
  );
};

export default Element;
