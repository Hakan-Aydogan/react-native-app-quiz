import questions from '../../data/questions';

const returnData = async (catId, specs) => {
  let data;
  if (catId !== undefined) {
    if (catId === 'random') {
      data = await questions;
    } else {
      data = await questions.filter(ques => ques.cat === String(catId));
    }
  }

  if (specs !== undefined) {
    data = await questions.filter(ques => ques.specs === String(specs));
  }

  return await data;
};

export default returnData;
