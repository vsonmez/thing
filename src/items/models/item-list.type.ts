import Item from "./item-global.type";

/**
 * This definition creates a type called ItemList that represents an object with string keys and Item values.
 */
type ItemList = {
  [key: string]: Item;
};

export default ItemList;
