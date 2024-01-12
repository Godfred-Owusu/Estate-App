import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMaker from "../GeoCoderMarker/GeoCoderMaker";
const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={1}
      scrollWheelZoom={false}
      className="h-[40vh] w-full mt-[20px] z-10 bg-red-300"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMaker address={`${address} ${city} ${country} `} />
    </MapContainer>
  );
};

export default Map;
