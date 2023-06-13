function extract(arr) {
  const [first, second, , , , last] = arr;
  return [first, second, last];
}

const array = [2,5,6,7,8,9,1];
console.log(extract(array));
