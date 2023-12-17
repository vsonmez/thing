import React, { useCallback, useRef } from "react";
import i18n from "../i18n";
import SelectComponent from "./inputs/Select.component";
/**
 * This code snippet defines a functional component called Language. It creates an array of language options using the useRef hook. When the language is changed in the SelectComponent, the onLanguageChange function is called, which in turn calls i18n.changeLanguage to update the language. The SelectComponent is rendered with the initial value set to the current language.
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
