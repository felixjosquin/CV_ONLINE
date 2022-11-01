import React from "react";
import PhotoProfil from "./Header/PhotoProfil";

const Header = () => {
  return (
    <div className="header_container">
      <PhotoProfil />
      <h1 className="name">Félix Josquin</h1>
    </div>
  );
};

export default Header;
