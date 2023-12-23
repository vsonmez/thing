/**
 * This code snippet defines a function called formatCurrency that takes in a number and an optional string parameter representing the locale. It uses the Intl.NumberFormat API to format the number as a currency value based on the specified locale (defaulting to "en-US"). The function then extracts the currency parts from the formatted value and returns them as an array.
 */
const formatCurrency = (value: number, locales: string = "en-US") => {
  let numberParts = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: "USD",
  }).formatToParts(value);
  const noDecimal = Number(numberParts[numberParts.length - 1].value) === 0;
  if (noDecimal) {
    numberParts = numberParts.slice(0, -2);
  }
  const returnValue = numberParts.map((part) => {
    if (part.type !== "currency") {
      return part.value;
    }
    return "";
  });
  return returnValue;
};
export default formatCurrency;
