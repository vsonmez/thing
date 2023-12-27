import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

const useCharacterSkills = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterSkillList = AppStore.useAppSelector(CharacterStore.select.skills);

  const setSkillPoint = useCallback(
    (defName: string, amount: number) => {
      dispatch(
        CharacterStore.actions.setSkillPoint({
          defName,
          amount,
        })
      );
    },
    [dispatch]
  );

  return {
    /**
     * Character Skill List
     */
    characterSkillList,
    /**
     * Set Skill Point
     */
    setSkillPoint,
  };
};

export default useCharacterSkills;
