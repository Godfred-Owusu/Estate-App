import React from "react";
import "./Properties.css";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import useProperties from "../../components/hooks/useProperties";
import { PuffLoader } from "react-spinners";
const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  // console.log(data);
  if (isError) {
    return (
      <div className="wrapper paddings flexCenter ">
        <span>Error fetching data...</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter h-[60vh]">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexCenter paddings innerWidth properties-container gap-8">
        <SearchBar />
      </div>
      <div className="paddings wrapper flexCenter">
        {data.map((card, i) => (
          <PropertyCard card={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
