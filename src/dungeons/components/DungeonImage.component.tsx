import React from "react";
/**
 * This code defines a functional component called DungeonImage. It takes two props: dungeonID (a string) and width (an optional number). It returns an image element with a specified width and a source path based on the dungeonID prop. The image is displayed with rounded corners and a gray border.
 */
const DungeonImage = ({ dungeonID }: { dungeonID: string }) => {
  return (
    <img
      className={`rounded border border-gray-400 overflow-hidden w-full`}
      src={require(`../../assets/images/dungeons/${dungeonID}.jpeg`)}
      alt=""
    />
  );
};

export default React.memo(DungeonImage);
