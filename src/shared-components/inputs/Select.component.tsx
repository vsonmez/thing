import React, { useCallback } from "react";
/**
 * This code snippet defines a React functional component called Select. It takes an object as its argument, which contains two properties: options and onChange. The options property is an array of objects with key and value properties of type string. The onChange property is a callback function that takes a string parameter.

Inside the component, there is a onChangeHandler function defined using the useCallback hook. This function is triggered when the select element's value changes. It extracts the new value from the event and calls the onChange callback, passing the new value as an argument.

The component returns a <select> element with an onChange event listener set to the onChangeHandler function. It also renders a series of <option> elements based on the options array, using the key and value properties of each object as the corresponding attributes.
 */
const Select = ({
  options,
  onChange,
  initialValue,
}: {
  initialValue?: string;
  options: { key: string; value: string }[];
  onChange: (event: string) => void;
}) => {
  const [value, setValue] = React.useState(initialValue);
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      if (event.isTrusted) {
        setValue(value);
        onChange(value);
      }
    },
    [onChange]
  );
  return (
    <select value={value} onChange={onChangeHandler} className="bg-black border border-gray-600 rounded p-1">
      {Object.values(options).map((option) => (
        <option key={option.key} value={option.value}>
          {option.key}
        </option>
      ))}
    </select>
  );
};

export default React.memo(Select);
