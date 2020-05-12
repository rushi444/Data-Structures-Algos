import React from 'react';
import axios from 'axios';

export const eventLoopDemo = () => {
  const [state, setState] = useState();

  useEffect(() => {
    const getApiData = async () => {
      const { data } = await axios.get(
        'https://dog.ceo/api/breeds/image/random',
      );
      setState(data);
    };
    getApiData();
  }, []);

  return <div>{state?.message}</div>;
};

// {state && state.message}

const minNumberOfCoinsForChange = (n, denoms) => {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (let denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1,
        );
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
};
