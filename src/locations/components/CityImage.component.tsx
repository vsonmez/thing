import React from "react";
/**
 * This code defines a functional component called CityImage. It takes in two props: cityID (a string) and width (an optional number). It renders an <img> element with a default width of 96 pixels. The src attribute of the image is set dynamically based on the cityID prop.
 */
const CityImage = ({ cityID }: { cityID: string }) => {
  return (
    <img
      className={`rounded border border-gray-400 overflow-hidden w-full`}
      src={require(`../../assets/images/cities/${cityID}.jpeg`)}
      alt=""
    />
  );
};

export default React.memo(CityImage);
