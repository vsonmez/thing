import React, { useEffect, useMemo, useRef, useState } from "react";
import Helpers from "../helpers/index.helpers";
import { useTranslation } from "react-i18next";
/**
 *  It renders the formatted currency value using the Helpers.formatCurrency function.
 */
const Currency = ({ value }: { value: number }) => {
  const [locales, setLocales] = useState("en-US");
  const { i18n } = useTranslation();
  useEffect(() => {
    setLocales(i18n.language === "tr" ? "tr-TR" : "en-US");
  }, [i18n.language]);
  return <>{Helpers.formatCurrency(value, locales)}</>;
};

export default React.memo(Currency);
