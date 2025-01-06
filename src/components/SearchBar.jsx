import React, { useRef } from "react";
import search_icon from "../assets/search.png";

const SearchBar = ({ search }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const city = inputRef.current.value.trim();
    if (city) {
      search(city);
    } else {
      alert("Please enter city name");
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 p-10 pb-4">
      <input ref={inputRef} type="text" placeholder="Search city" className=" rounded-3xl p-3 focus:outline-none focus:ring focus:ring-slate-100"/>
      <img src={search_icon} alt="Search icon" onClick={handleSearch} className="rounded-full p-3 bg-white hover:bg-slate-100 hover:scale-110 "/>
    </div>
  );
};

export default SearchBar;
