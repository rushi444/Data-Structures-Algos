const React = (() => {
  function useState(initValue) {
    let val = initValue;
    let state = () => val;
    let setState = (newVal) => {
      val = newVal;
    };
    return [state, setState];
  }

  return { useState };
})();

const [count, setCount] = React.useState(1);

console.log(count());

setCount(2);

console.log(count());