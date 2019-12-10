const cakesColl = [0, 0, 0];
const pansColl = Array(2).fill(null);

const isEmptyPan = (pan, index) => pan[index] === null;

const cook = (cakes, pans) => {
  const [cake1, cake2, cake3] = cakes;

  const cakesObj = {
    cake1,
    cake2,
    cake3,
    time: 0,
  };

  const ready = 2;
  while (cakesObj.cake3 !== ready) {
    if (isEmptyPan(pans, 0) && isEmptyPan(pans, 1)) {
      cakesObj.cake1 = 1;
      cakesObj.cake2 = 1;
      cakesObj.time = 1;
      console.log('Cakes are not ready yet!');
      console.log(`Cooking time ${cakesObj.time}.`);
    }
    if (cakesObj.cake1 === 1 && cakesObj.cake2 === 1) {
      cakesObj.cake1 = 2;
      cakesObj.cake3 = 1;
      cakesObj.time = 2;
      console.log('The first cakes is ready but the rest cakes are not ready yet!');
      console.log(`Cooking time ${cakesObj.time}.`);
    }

    if (cakesObj.cake1 === 2 && cakesObj.cake3 === 1) {
      cakesObj.cake2 = 2;
      cakesObj.cake3 = 2;
      cakesObj.time = 3;
      console.log('The second and the third cakes are ready!');
      console.log(`Cooking time ${cakesObj.time}.`);
    }
  }
  console.log(`Cakes are ready! Cooking time ${cakesObj.time}`);
  return cakesObj;
};

console.log(cook(cakesColl, pansColl));
