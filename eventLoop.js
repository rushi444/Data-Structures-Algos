const axios = require('axios');

const getApiData = async () => {
  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log('api response', data);
};

console.log('start');
console.log('api call', getApiData());
console.log('end');
