function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArray = [1,23,4,6,77,8,98,79];

console.log(filtraPares(meuArray))