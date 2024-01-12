import React from "react";
import { AiFillHeart } from "react-icons/ai";
import "./PropertiesCard.css";
// import useProperties from "../hooks/useProperties";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ card }) => {
  // const { data, isError, isLoading } = useProperties();
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart residence-card relative"
      onClick={() => navigate(`/properties/${card.id}`)}
    >
      <AiFillHeart
        size={24}
        color="white"
        className="absolute top-6 right-8 z-10"
      />
      <img src={card.image} alt="" />

      <span className="secondaryText residence-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
