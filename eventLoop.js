const axios = require('axios');

const getApiData = async () => {
  // axios.get('https://dog.ceo/api/breeds/image/random').then(res => res.data)

  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(data)
};

console.log('start');
console.log('api call', getApiData());
console.log('end');
