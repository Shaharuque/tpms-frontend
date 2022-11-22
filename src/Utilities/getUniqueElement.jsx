export const getUnique = (array) => {
  let uniqueArray = [];

  // Loop through array values
  for (let value of array) {
    if (uniqueArray.indexOf(value) === -1) {
      uniqueArray.push(value);
    }
  }
  return uniqueArray;
};
