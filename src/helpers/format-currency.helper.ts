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
