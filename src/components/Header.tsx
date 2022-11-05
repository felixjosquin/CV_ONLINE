import React from "react";
import Name from "./Header/Name";
import PhotoProfil from "./Header/PhotoProfil";

const Header = () => {
  return (
    <div className="header_container">
      <PhotoProfil />
      <Name />
    </div>
  );
};

export default Header;
