import React from "react";
import { useHover } from "../../utils/onHover";
import { color_type } from "../../utils/type";
import SvgContainer from "../utils/SvgContainer";

interface SubSectionProp {
  identifier: string;
  title: string;
  color?: { hover?: color_type; not_hover?: color_type };
}

const SubSection = (prop: any) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const identifier = "code_langage";
  const title = "Langage programmation";
  // const svg_color:color_type = { hover: "pink" };

  return (
    <div className="subsection-container" ref={hoverRef}>
      <SvgContainer
        identifier={identifier}
        className={"subsection-icon"}
        // color={svg_color}
      />
      {/* <h2 className="subsection-title">{data.title}</h2> */}
    </div>
  );
};

export default SubSection;
