const React = require('./React')

const [count, setCount] = React.useState(1);

console.log(count());

setCount(2);

console.log(count());