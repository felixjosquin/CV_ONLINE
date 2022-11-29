import ItemNav from "./Content/ItemNav";
import Navigation from "./Content/Navigation";

const Content = () => {
  return (
    <div className="content_container">
      <Navigation>
        <ItemNav identifier="etude" title="Parcours d'étude" />
        <ItemNav identifier="etude" />
        <ItemNav identifier="etude" />
      </Navigation>
    </div>
  );
};

export default Content;
