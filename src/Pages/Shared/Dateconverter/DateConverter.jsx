// database date converter
// const data = "2023-02-06T10:34:56.000000Z"  //year month day
// // month day year
export const DatabaseDateConverter = (s) => {
  const clone = s.slice(0, 10).split("-");
  return `${clone[1]}/${clone[2]}/${clone[0]}`;
};

// const x = DatabaseDateConverter("2023-02-06T10:34:56.000000Z");
// console.log(x);

export const dbtimeconverter = (s) => {
  console.log("sb", s);
  const clone = s?.slice(11, 19)?.split(":");
  // return `${clone[0]}:${clone[1]}:${clone[2]}`;
  return `${clone[0]}:${clone[1]}}`;
  // return clone;
};
