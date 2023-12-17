import React from "react";
/**
 * It renders an image tag with a default width of 96 pixels. The source of the image is dynamically generated using the itemDefName prop.
 */
const ItemImage = ({ itemDefName, width }: { itemDefName: string; width?: number }) => {
  return (
    <img
      width={width || 96}
      className="rounded border border-gray-400 overflow-hidden"
      src={require(`../../assets/images/items/${itemDefName}.jpeg`)}
      alt=""
    />
  );
};

export default React.memo(ItemImage);
