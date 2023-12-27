import React, { useCallback, useEffect, useState } from "react";
import Helpers from "../../helpers/index.helpers";
import Character from "../models/character.class";
import ModalComponent from "../../shared-components/modal/Modal.component";
import useSetCharacter from "../../store/hooks/character/use-set-character.hook";
import { useTranslation } from "react-i18next";
/**
 * This code snippet defines a React functional component called CreateCharacter. It is responsible for rendering a modal component that allows users to create a character.

The component uses several hooks from the React library, such as useState, useCallback, and useEffect, to manage the component's state and lifecycle.

The component maintains state variables for name, totalStatPoint, str, strModifier, dex, dexModifier, cons, and consModifier using the useState hook. These variables hold the current values of the character's name, total stat points, strength, strength modifier, dexterity, dexterity modifier, constitution, and constitution modifier, respectively.

The component also defines callback functions increaseStr, decreaseStr, increaseDex, decreaseDex, increaseCons, and decreaseCons to handle the increment and decrement of the character's strength, dexterity, and constitution attributes. These functions update the respective state variables and adjust the total stat points accordingly.

There is an onSave callback function that is called when the user clicks the "Save" button. It checks if the character's name is not empty and if there are no remaining total stat points. If the conditions are met, it creates a new character object using the Character class and calls the setCharacter function.

The useEffect hook is used to initialize the totalStatPoint state variable by retrieving it from local storage or generating a random value within a specific range if it does not exist. It also sets the initial value of the totalStatPoint state variable.

Finally, the component renders a modal component with a title of "Create Character" and several input fields and buttons for the user to enter the character's name and adjust the attributes. The current values of the attributes and their corresponding modifiers are displayed, and the "Save" button triggers the onSave callback function when clicked.

Overall, this code snippet represents a character creation form in a game or application, allowing users to customize the attributes of their character.
 */
const CreateCharacter = () => {
  //#region
  const { t } = useTranslation();
  const { setCharacter } = useSetCharacter();
  const [name, setName] = useState("");
  const [totalStatPoint, setTotalStatPoint] = useState(0);
  const [str, setStr] = useState(0);
  const [strModifier, setStrModifier] = useState(0);
  const [dex, setDex] = useState(0);
  const [dexModifier, setDexModifier] = useState(0);
  const [cons, setCons] = useState(0);
  const [consModifier, setConsModifier] = useState(0);

  const increaseStr = useCallback(() => {
    if (totalStatPoint > 0) {
      setStr(str + 1);
      setStrModifier(Math.floor(Helpers.calculateStatModifier(str + 1)));
      setTotalStatPoint(totalStatPoint - 1);
    }
  }, [str, totalStatPoint]);

  const decreaseStr = useCallback(() => {
    if (str > 0) {
      setStr(str - 1);
      setStrModifier(Math.floor(Helpers.calculateStatModifier(str - 1)));
      setTotalStatPoint(totalStatPoint + 1);
    }
  }, [str, totalStatPoint]);

  const increaseDex = useCallback(() => {
    if (totalStatPoint > 0) {
      setDex(dex + 1);
      setDexModifier(Math.floor(Helpers.calculateStatModifier(dex + 1)));
      setTotalStatPoint(totalStatPoint - 1);
    }
  }, [dex, totalStatPoint]);

  const decreaseDex = useCallback(() => {
    if (dex > 0) {
      setDex(dex - 1);
      setDexModifier(Math.floor(Helpers.calculateStatModifier(dex - 1)));
      setTotalStatPoint(totalStatPoint + 1);
    }
  }, [dex, totalStatPoint]);

  const increaseCons = useCallback(() => {
    if (totalStatPoint > 0) {
      setCons(cons + 1);
      setConsModifier(Math.floor(Helpers.calculateStatModifier(cons + 1)));
      setTotalStatPoint(totalStatPoint - 1);
    }
  }, [cons, totalStatPoint]);

  const decreaseCons = useCallback(() => {
    if (cons > 0) {
      setCons(cons - 1);
      setConsModifier(Math.floor(Helpers.calculateStatModifier(cons - 1)));
      setTotalStatPoint(totalStatPoint + 1);
    }
  }, [cons, totalStatPoint]);

  const onSave = useCallback(() => {
    if (!name || totalStatPoint > 0) {
      return;
    }
    setCharacter(new Character(name, { str, dex, cons }));
    localStorage.removeItem("reset");
  }, [name, totalStatPoint, setCharacter, str, dex, cons]);

  useEffect(() => {
    const _totalStatPoint = localStorage.getItem("totalStatPoint")
      ? JSON.parse(localStorage.getItem("totalStatPoint")) + 30
      : Helpers.getRandomNumber(35, 45);
    setStr(10);
    setStrModifier(Helpers.calculateStatModifier(10));
    setDex(10);
    setDexModifier(Helpers.calculateStatModifier(10));
    setCons(10);
    setConsModifier(Helpers.calculateStatModifier(10));
    localStorage.setItem("totalStatPoint", JSON.stringify(_totalStatPoint - 30));
    setTotalStatPoint(_totalStatPoint - 30);
  }, [setTotalStatPoint]);
  //#endregion
  return (
    <ModalComponent title={t("Create Character")} onClose={onSave} hideCloseButton={true}>
      <>
        <ul className="flex flex-col gap-4 mt-5">
          <li className="flex justify-center">
            <input
              className="bg-black border border-gray-600 rounded p-1 text-center"
              type="text"
              placeholder={t("Name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            {t("Total Stat Points")}: {totalStatPoint}
          </li>
          <li className="border border-gray-500 rounded p-2">
            <div className="flex gap-4 mb-2">
              STR {str}
              <button className="border rounded px-2" onClick={increaseStr}>
                +
              </button>
              <button className="border rounded px-2" onClick={decreaseStr}>
                -
              </button>
            </div>
            <div>
              + {strModifier} {t("Attack")}
            </div>
          </li>
          <li className="border border-gray-500 rounded p-2">
            <div className="flex gap-4 mb-2">
              DEX {dex}
              <button className="border rounded px-2" onClick={increaseDex}>
                +
              </button>
              <button className="border rounded px-2" onClick={decreaseDex}>
                -
              </button>
            </div>
            <div>
              + {dexModifier} {t("Defense")}
            </div>
          </li>
          <li className="border border-gray-500 rounded p-2">
            <div className="flex gap-4 mb-2">
              CONS {cons}
              <button className="border rounded px-2" onClick={increaseCons}>
                +
              </button>
              <button className="border rounded px-2" onClick={decreaseCons}>
                -
              </button>
            </div>
            <div>
              + {consModifier} {t("Health")} {t("every level")}
            </div>
          </li>
          <li className="border-t border-gray-500 pt-3 flex justify-center">
            <button className="border rounded p-2 bg-green-700 hover:bg-green-800" onClick={onSave}>
              Save
            </button>
          </li>
        </ul>
      </>
    </ModalComponent>
  );
};

export default React.memo(CreateCharacter);
