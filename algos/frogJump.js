var canCross = function (stones) {
  // this for loop is to check if all the jumps are possible. If a position is greater than twice the position before it, we know it's not possible.
  for (let i = 3; i < stones.length; i++) {
    if (stones[i] > stones[i - 1] * 2) {
      return false;
    }
  }

  //populate a hashmap with the positions of the stones (u'll need this later)
  let lookup = new Map();
  for (let i of stones) {
    lookup.set(i);
  }

  console.log(lookup);

  //when you see this stone, you know you've reached the end and solved the problem
  let end = stones[stones.length - 1];

  //2 stacks which help us get the current position & jump
  let positions = [0];
  let jumps = [0];

  //while there is something in the stack, iterate
  while (positions.length) {
    let currentPos = positions.pop();
    let currentJump = jumps.pop();
    //try all possible jump distances
    for (let i = currentJump - 1; i <= currentJump + 1; i++) {
      //if a jump distance is <= 0 we know we're going back to a position we've already seen. we dont want this
      if (i <= 0) {
        continue;
      }
      let nextPos = currentPos + i;
      if (nextPos == end) {
        //if we hit this we reach the end
        return true;
      }
      if (lookup.has(nextPos)) {
        //check if the nextPos is ana available position to jump to, if so add it to the stacks
        positions.push(nextPos);
        jumps.push(i);
      }
    }
  }

  return false;
};
