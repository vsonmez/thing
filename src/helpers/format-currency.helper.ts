const formatCurrency = (value: number) => {
  const numberParts = new Intl.NumberFormat("en-US", {
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
