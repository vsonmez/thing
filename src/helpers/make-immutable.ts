const makeImmutable = <T>(obj: any): T => {
  if (obj) {
    return JSON.parse(JSON.stringify(obj)) as T;
  }
  return obj;
};
export default makeImmutable;
