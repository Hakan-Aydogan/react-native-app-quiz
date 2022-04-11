import CatDefine from './CatDefine';

const randomIndexNumber = async (catId, quantity) => {
  let array = {};
  array = await CatDefine(catId);
  let arrayLess = await CatDefine(catId);
  let lengthArray = array.length;
  const arrayElected = [];

  for (let index = 0; index < quantity; index++) {
    if (lengthArray < quantity) {
      arrayLess.forEach(element => {
        array.push(element);
        lengthArray++;
      });
    }
    let i = Math.floor(Math.random() * lengthArray);
    array[i].correct;
    arrayElected.push(array[i]);
    array.splice(i, 1);
    lengthArray--;
  }
  return arrayElected;
};

export default randomIndexNumber;
