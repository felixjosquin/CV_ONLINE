import { color_type } from "../utils/type";
import Element from "./Sidebar/Element";

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
    color: { not_hover: "green" },
    rating: 1.5,
  };

  const typescript: ElementProp = {
    svg_identifier: "typescript_svg",
    label: "Typescript",
    info: "Allez l'OM",
    color: { not_hover: "green" },
    rating: 2.5,
  };

  return (
    <div className="sidebar_container">
      <Element {...python} />
      <Element {...typescript} />
      <Element {...python} />
      <Element {...typescript} />
    </div>
  );
};

export default Sidebar;
