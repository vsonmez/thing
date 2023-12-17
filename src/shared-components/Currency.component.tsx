import React, { useEffect, useMemo, useRef, useState } from "react";
import Helpers from "../helpers/index.helpers";
import { useTranslation } from "react-i18next";
/**
 * This code snippet defines a React component called Currency that renders a formatted currency value. It uses the Helpers.formatCurrency function to format the value. The component also includes some logic related to language settings and localization using the useTranslation hook.
 */
const Currency = ({ value }: { value: number }) => {
  const initialLanguage = useRef(localStorage.getItem("language"));
  const initialLanguageValue = useMemo(() => {
    if (initialLanguage.current) {
      return initialLanguage.current === "tr" ? "tr-TR" : "en-US";
    }
    return "en-US";
  }, []);
  const [locales, setLocales] = useState(initialLanguageValue);
  const { i18n } = useTranslation();
  useEffect(() => {
    setLocales(i18n.language === "tr" ? "tr-TR" : "en-US");
  }, [i18n.language]);
  return <>{Helpers.formatCurrency(value, locales)}</>;
};

export default React.memo(Currency);
