import React, { useState } from "react";
import SearchBar from "../../components/SearchBars";
import { useSelector } from "react-redux";
import SearchResults from "../../components/SearchResults";
import Loading from "../../components/Loading";

const Home = () => {
  const [number, setNumber] = useState(5);
  const searchResults = useSelector((state) => state.dataReducer); // from reducer store
  const data = searchResults?.searchData;
  const load = searchResults?.searchStart;
  const moreHandler = () => {
    number === 10 ? setNumber(data.length) : setNumber(number + 5);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <SearchBar />
      <div className="w-3/4 mx-auto">
        {load === true && <Loading />}
        {data?.slice(0, number).map((res) => (
          <SearchResults result={res} key={res.story_id} />
        ))}
      </div>
      {number !== data?.length && data !== null && (
        <span
          className="text-center mt-2 mb-2 text-indigo-400 cursor-pointer hover:text-indigo-900 duration-1000"
          onClick={moreHandler}
        >
          More...
        </span>
      )}
    </div>
  );
};

export default Home;
