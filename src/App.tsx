import "./asset/index.scss";

import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/SideBar";

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <Content />
      <Sidebar />
    </div>
  );
};

export default App;
