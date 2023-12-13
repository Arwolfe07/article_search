import React, { useState } from "react";
import { fetchSearchData } from "../../actions/data";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchInp, setSearchInp] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchData(searchInp));
    setSearchInp("");
  };

  return (
    <div className="relative p-8 sm:p-12 w-sreen sm:w-full sm:max-w-2xl  sm:mx-auto">
      <div className="overflow-hidden z-0 rounded-full relative p-3">
        <form
          className="flex relative bg-white rounded-full z-50 sm:justify-none justify-between"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter your search"
            className="rounded-full  sm:flex-1 sm:px-6 sm:py-4 px-4 py-2 text-gray-700 focus:outline-none"
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-full bg-indigo-500 text-white px-4  sm:px-8 sm:py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
          >
            Search
          </button>
        </form>
        <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
        <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
        <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
        <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
      </div>
    </div>
  );
};

export default SearchBar;
