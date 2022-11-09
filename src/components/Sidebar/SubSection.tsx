import React from "react";
import { useHover } from "../../utils/onHover";
import SvgContainer from "../utils/SvgContainer";

interface SubSectionProp {
  identifier: string;
  title: string;
  color?: "pink" | "green" | "red" | "blue";
  hover: boolean;
}

const SubSection = (prop: any) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const identifier = "code_langage";
  const title = "Langage programmation";
  const svg_color = { hover: "pink" };

  return (
    <div className="subsection-container" ref={hoverRef}>
      <SvgContainer
        identifier={identifier}
        className={"subsection-icon"}
        color={svg_color}
        hover={isHovered}
      />
      {/* <h2 className="subsection-title">{data.title}</h2> */}
    </div>
  );
};

export default SubSection;
