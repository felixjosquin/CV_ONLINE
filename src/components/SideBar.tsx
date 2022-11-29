import { color_type } from "../utils/type";
import Element from "./Sidebar/Element";
import SubSection from "./Sidebar/SubSection";

interface ElementProp {
  svg_identifier?: string;
  label: string;
  info?: string;
  color?: { hover?: color_type; not_hover?: color_type };
  rating: number;
}

const Sidebar = () => {
  const python: ElementProp = {
    svg_identifier: "python_svg",
    label: "python",
    info: "A jamais les premiers",
    color: { not_hover: "red" },
    rating: 3,
  };

  const typescript: ElementProp = {
    svg_identifier: "typescript_svg",
    label: "Typescript",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const vba: ElementProp = {
    svg_identifier: "vba_svg",
    label: "VBA / Excel",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const matlab: ElementProp = {
    svg_identifier: "matlab_svg",
    label: "Matlab",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const express: ElementProp = {
    svg_identifier: "express_svg",
    label: "Express",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const javascript: ElementProp = {
    svg_identifier: "javascript_svg",
    label: "Javascript",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const html: ElementProp = {
    svg_identifier: "html_svg",
    label: "HTML / CSS",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const django: ElementProp = {
    svg_identifier: "django_svg",
    label: "Django",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const react: ElementProp = {
    svg_identifier: "react_svg",
    label: "react",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const sql: ElementProp = {
    svg_identifier: "sql_svg",
    label: "SQL",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const mongo: ElementProp = {
    svg_identifier: "mongo_svg",
    label: "mongo DB",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const illustrator: ElementProp = {
    svg_identifier: "illustrator_svg",
    label: "Illustrator",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const premiere: ElementProp = {
    svg_identifier: "premiere_svg",
    label: "Première pro",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const r_studio: ElementProp = {
    svg_identifier: "R_svg",
    label: "RStudio",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const c: ElementProp = {
    svg_identifier: "c_svg",
    label: "c",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  const java: ElementProp = {
    svg_identifier: "java_svg",
    label: "Java",
    info: "Allez l'OM",
    color: { not_hover: "red" },
    rating: 2.5,
  };

  return (
    <div className="sidebar_container">
      <SubSection>
        <Element {...python} />
        <Element {...matlab} />
        <Element {...typescript} />
        <Element {...vba} />
        <Element {...express} />
        <Element {...javascript} />
        <Element {...django} />
        <Element {...r_studio} />
        <Element {...c} />
        <Element {...java} />
      </SubSection>
      <SubSection>
        <Element {...html} />
        <Element {...typescript} />
        <Element {...react} />
        <Element {...sql} />
        <Element {...mongo} />
        <Element {...illustrator} />
        <Element {...premiere} />
      </SubSection>
    </div>
  );
};

export default Sidebar;
