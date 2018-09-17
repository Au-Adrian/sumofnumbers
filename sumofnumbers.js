const testList = [1, 2, 3, 4, 5];

function sumFor(array) {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testList));

function sumWhile(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testList));

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  } // console.log(array.slice(1, array.length));
  return array[0] + sumRecursion(array.slice(1, array.length));
}

console.log(sumRecursion(testList));

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) {
    return memo + num;
  }, 0);
}

console.log(sumTheSimpleWay(testList));
