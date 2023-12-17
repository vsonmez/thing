import React, { useCallback, useRef } from "react";
import i18n from "../i18n";
import SelectComponent from "./inputs/Select.component";
/**
 * This code snippet is a functional component written in TypeScript using React. It renders a <select> element with two options: "Turkish" and "English".

The component uses the useState hook to define a state variable called language and a function to update it called setLanguage. The initial value of language is set to the value of i18n.language.

The useCallback hook is used to define a memoized callback function called onLanguageChange. This function is triggered when the value of the select element changes. It updates the language state variable with the selected value and also calls the changeLanguage function from i18n (presumably an internationalization library) with the selected value.

The component returns the select element.

 */
const Language = () => {
  const options = useRef([
    {
      key: "Türkçe",
      value: "tr",
    },
    {
      key: "English",
      value: "en",
    },
  ]);
  const onLanguageChange = useCallback((value: string) => {
    i18n.changeLanguage(value);
  }, []);
  return (
    <SelectComponent
      options={options.current}
      onChange={onLanguageChange}
      initialValue={i18n.language}
    ></SelectComponent>
  );
};

export default React.memo(Language);
