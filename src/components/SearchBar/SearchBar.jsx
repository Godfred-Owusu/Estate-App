import React from "react";
import { TiLocation } from "react-icons/ti";
const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
      <TiLocation size={30} color="var(--blue)" />
      <input type="text" />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
