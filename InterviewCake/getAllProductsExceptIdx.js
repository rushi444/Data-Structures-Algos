function getProductsOfAllIntsExceptAtIndex(intArray) {
  if (intArray.length < 2) throw new Error('need at least 2 nums');

  const productOfAllIntsBeforeIdx = [];

  let productSoFar = 1;

  for (let i = 0; i < intArray.length; i++) {
    productOfAllIntsBeforeIdx[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  productSoFar = 1;

  for (let i = intArray.length - 1; i >= 0; i--) {
    productOfAllIntsBeforeIdx[i] *= productSoFar;
    productSoFar *= intArray[i];
  }
  return productOfAllIntsBeforeIdx;
}
