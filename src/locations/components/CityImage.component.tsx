import React from "react";

const CityImage = ({ cityID, width }: { cityID: string; width?: number }) => {
  return (
    <img
      width={width || 96}
      className={`rounded border border-gray-400 overflow-hidden`}
      src={require(`../../assets/images/cities/${cityID}.jpeg`)}
      alt=""
    />
  );
};

export default React.memo(CityImage);
