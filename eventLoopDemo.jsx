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


