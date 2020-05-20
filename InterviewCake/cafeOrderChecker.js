function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  if (takeOutOrders.length + dineInOrders.length !== servedOrders.length) {
    return false;
  }

  let takeOutIdx = 0;
  let dineInIdx = 0;

  for (let order of servedOrders) {
    if (order === takeOutOrders[takeOutIdx]) {
      takeOutIdx++;
    } else if (order === dineInOrders[dineInIdx]) {
      dineInIdx++;
    } else {
      return false;
    }
  }
  return true;
}
