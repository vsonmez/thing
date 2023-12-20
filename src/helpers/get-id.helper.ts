const getID = () => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    if (i > 0 && i % 2 === 0) {
      id += "-";
    }
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return id;
};
export default getID;
