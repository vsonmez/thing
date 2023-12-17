/**
 * This code snippet defines a function called formatCurrency that takes in a number and an optional string parameter representing the locale. It uses the Intl.NumberFormat API to format the number as a currency value based on the specified locale (defaulting to "en-US"). The function then extracts the currency parts from the formatted value and returns them as an array.
 */
const formatCurrency = (value: number, locales: string = "en-US") => {
  const numberParts = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: "USD",
  }).formatToParts(value);
  const returnValue = numberParts.map((part) => {
    if (part.type !== "currency") {
      return part.value;
    }
    return "";
  });
  return returnValue;
};
export default formatCurrency;
