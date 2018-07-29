var chocolateBars = ["snickers",
"hundred grand",
"kitkat",
"skittles"]

function addElementToBeginningOfArray([1], 'foo') {
addElementToBeginningOfArray.unshift('foo');
return 'foo';
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}