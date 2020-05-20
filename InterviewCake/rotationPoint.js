function findRotationPoint(words) {
  const firstWord = words[0];
  let floorIdx = 0;
  let ceilingIdx = words.length - 1;

  while (floorIdx < ceilingIdx) {
    const guessIdx = Math.floor(floorIdx + (ceilingIdx - floorIdx) / 2);

    if (words[guessIdx] >= firstWord) {
      floorIdx = guessIdx;
    } else {
      ceilingIdx = guessIdx;
    }

    if (floorIdx + 1 === ceilingIdx) {
      break;
    }
  }

  return ceilingIdx;
}
