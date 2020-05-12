const React = (() => {
  function useState(initValue) {
    let _val = initValue;
    let state = () => _val;
    let setState = (newVal) => {
      _val = newVal;
    };
    return [state, setState];
  }

  return { useState };
})();

const [count, setCount] = React.useState(1);

console.log(count());

setCount(2);

console.log(count());