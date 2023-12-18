const experience = {
  getNextLevel: (level: number) => {
    if (level === 0) {
      return 1000;
    }
    return level * 1000 * 1.5;
  },
};
export default experience;
