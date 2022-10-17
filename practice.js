let highOrLow = (arg1, arg2, value) => {
  let high;
  let low;
  if (arg1 > arg2) {
    high = arg1;
    low = arg2;
  }
  else {
    high = arg2;
    low = arg1;
  }
  return value === "most" ? high : low;
}

function multiplyBiggerNumByTwo(num1, num2) {
    return highOrLow(num1, num2, "most") * 2;
}

function divideBiggerNumByThree(num1, num2) {
    return highOrLow(num1, num2, "most") / 3;
}

function eatMostTacos(sum1, sum2) {
    return `I ate ${highOrLow(sum1, sum2, "most")} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    return `I adopted a dog that weighs ${highOrLow(weight1, weight2, "least")} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
