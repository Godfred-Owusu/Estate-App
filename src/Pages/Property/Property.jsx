import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import Map from "../../components/Map/Map";
const Property = () => {
  // getting the routes path
  const location = useLocation();
  //   getting the id
  const id = location.pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["residency", id], () =>
    getProperty(id)
  );
  console.log(data);
  if (isError) {
    return (
      <div className="wrapper paddings flexCenter">
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
      <div className="flexColStart paddings innerWidth p-container gap-8 relative">
        {/* like button */}
        <div className=" absolute top-12 right-12 cursor-pointer ">
          <AiFillHeart color="black" size={25} />
        </div>

        {/* image */}
        <img
          src={data?.image}
          alt="House-Image"
          className="self-center max-h-[35rem] w-full rounded-2xl object-cover"
        />
        <div className="w-full flex justify-start items-start gap-6">
          {/* left */}
          <div className=" w-full">
            <div className="flex head justify-between w-full">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText text-2xl">$ {data?.price}</span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities gap-4 text-lg">
              {/* Bedrooms */}
              <div className="flexStart facility gap-2">
                <FaShower size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.bedrooms}
                  {data?.facilities?.bedrooms <= 1 ? "Bathroom" : "Bathrooms"}
                </span>
              </div>

              {/* Parking */}
              <div className="flexStart facility gap-2 p-4">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.parkings}
                  {data?.facilities?.parkings <= 1 ? "Parkings" : "Parkings"}
                </span>
              </div>

              {/* Bathrooms */}
              <div className="flexStart facility gap-2">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>
                  {data?.facilities?.bathrooms}
                  {data?.facilities?.bathrooms <= 1 ? "Bathroom" : "Bathrooms"}
                </span>
              </div>
            </div>

            {/* Description */}
            <span className="secondaryText text-justify ">
              {data?.description}
            </span>

            {/* address */}
            <div className=" flexStart gap-4 my-4">
              <MdLocationPin size={25} color="#1F3E72" />
              <span className="secondaryText">
                {data?.address} {data?.city} {data?.country}
              </span>
            </div>

            {/* Booking Button */}
            <button className="button w-full mt-4 hover:scale-105">
              Book your visit
            </button>
          </div>
          <div className="map w-full">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
/*
//  {/* w-full justify-center */
// <div className="flexCenter properties-details gap-8 w-full justify-center">
{
  /* left */
}
{
  /* <div className="flexColStart left flex gap-6"> */
}
{
  /* head */
}
{
  /* <div className="flexStart head justify-between w-full">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText text-2xl">$ {data?.price}</span>
            </div>
          </div> */
}

{
  /* right side */
}
{
  /* <div className=" gap-6 ">this is the right side</div>
        </div>  */
}
