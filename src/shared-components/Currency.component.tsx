import React from "react";
import Helpers from "../helpers/index.helpers";
/**
 *  It renders the formatted currency value using the Helpers.formatCurrency function.
 */
const Currency = ({ value }: { value: number }) => {
  return <>{Helpers.formatCurrency(value)}</>;
};

export default React.memo(Currency);
