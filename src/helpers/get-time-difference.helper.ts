const getTimeDifference = (dateByMiliseconds1: number, dateByMiliseconds2: number) => {
  const diff = Math.abs(dateByMiliseconds1 - dateByMiliseconds2);
  const milisecondUnits = {
    day: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000,
  };

  const diffObject = {
    day: Math.floor(diff / milisecondUnits.day),
    hours: Math.floor((diff % milisecondUnits.day) / milisecondUnits.hours),
    minutes: Math.floor((diff % milisecondUnits.hours) / milisecondUnits.minutes),
    seconds: Math.floor((diff % milisecondUnits.minutes) / milisecondUnits.seconds),
    totalSeconds: 0,
  };

  diffObject.totalSeconds =
    diffObject.day * 24 * 60 * 60 + diffObject.hours * 60 * 60 + diffObject.minutes * 60 + diffObject.seconds;

  return diffObject;
};

export default getTimeDifference;
