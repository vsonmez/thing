import React, { useCallback, useRef } from "react";
import i18n from "../i18n";
import SelectComponent from "./inputs/Select.component";
/**
 * This code snippet defines a functional component called Language. It uses the useRef hook to create an array of language options. When the language is changed in the SelectComponent, the onLanguageChange function is called. This function updates the language using i18n.changeLanguage and also sets the selected language in the local storage. The SelectComponent is rendered with the initial value set to the current language.
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
    localStorage.setItem("language", value);
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
