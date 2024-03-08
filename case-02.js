const checkTypeNumber = (givenNumber) => {
  if (givenNumber) {
    if (typeof givenNumber === "number") {
      return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    }
    return "Error: invalid data type";
  }
  return "Error: bro where is the parameter?";
};

console.log(checkTypeNumber(10)); 
console.log(checkTypeNumber(3)); 
console.log(checkTypeNumber("3")); 
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([])); 
console.log(checkTypeNumber()); 
