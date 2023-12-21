type Dungeon = {
  name: string;
  id: string;
  description: {
    tr: string;
    en: string;
  };
  monsters?: string[];
  traps?: string[];
};
export default Dungeon;
