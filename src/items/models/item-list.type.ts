import Item from "./item-global.type";

/**
 * This definition creates a type called ItemList that represents an object with string keys and Item values.
 */
type ItemList<T = Item> = {
  [key: string]: T;
};

export default ItemList;
