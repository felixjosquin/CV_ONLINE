import React, { Children, useState } from "react";
// import { color_type } from "../../utils/type";
import SvgContainer from "../utils/SvgContainer";
import styled, { keyframes } from "styled-components";

// interface SubSectionProp {
//   identifier: string;
//   title: string;
//   color?: { hover?: color_type; not_hover?: color_type };
// }

const elment_show = 1;

const SubSection = (prop: any) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const identifier = "code_langage";
  const title = "Langage programmation";
  const color: any = "pink";

  const elt_count = Children.count(prop.children);

  const trigger_button = () => {
    if (elt_count > elment_show) {
      setShowMore(!showMore);
    }
  };

  var AninateList = styled.div``;
  if (elt_count >= elment_show) {
    const show_more = keyframes`
    0% { height: ${70 * elment_show}px;}
    100% { height: ${70 * elt_count}px; }
    `;

    AninateList = styled.div`
      animation: ${show_more} 1s cubic-bezier(0.7, 0, 0.34, 1.01)
        ${!showMore && "reverse"};
    `;
  }

  return (
    <>
      <button
        className={
          "subsection-head" + (color ? " subsection-head-" + color : "")
        }
        onClick={trigger_button}
      >
        <SvgContainer
          identifier={identifier}
          className="subsection-icon"
          color={{ hover: color }}
        />
        <h2 className="subsection-title">{title}</h2>
        {elt_count > elment_show && (
          <svg
            className={"more-svg" + (showMore ? " more-svg-pressed" : "")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 99.75 54.21"
          >
            <path
              d="M142.61,354.54a7,7,0,0,1-2.22,4.9l-42.17,40a7.62,7.62,0,0,1-9.17,1.26,5.91,5.91,0,0,1-1.32-.95q-9.51-8.87-19-17.74Q57,371,45.28,359.88a6.79,6.79,0,0,1-1.22-9,7.71,7.71,0,0,1,10.71-1.74,21.86,21.86,0,0,1,1.87,1.57L91.47,383.6c1.23,1.17,1.23,1.17,2.5,0l35.93-33.95A7.54,7.54,0,0,1,142,352,14.46,14.46,0,0,1,142.61,354.54Z"
              transform="translate(-42.86 -347.52)"
            />
          </svg>
        )}
      </button>
      <AninateList className="subsection-list">
        {React.Children.map(prop.children, (child, index) => {
          if (index >= elment_show) {
            return React.cloneElement(child, { hidden: !showMore });
          }
          return child;
        })}
        {elt_count > elment_show && (
          <div
            onClick={trigger_button}
            className={"cache" + (showMore ? " cache-show-more" : "")}
          />
        )}
      </AninateList>
    </>
  );
};

export default SubSection;
