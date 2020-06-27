// const arrival = [1, 1, 1, 1, 4];
// const duration = [5, 10, 3, 6, 4];

const arrival = [1, 3, 5];
const duration = [2, 2, 2];

const maxEvents = (arrival, duration) => {
  let schedule = {};
  for (let index in arrival) {
    if (arrival[index] in schedule) {
      schedule[arrival[index]].push(duration[index]);
    } else {
      schedule[arrival[index]] = [duration[index]];
    }
  }

  let times = Object.keys(schedule);
  let counter = 1;
  let nextAvailable = arrival[0] + Math.min(...times[0]);

  for (let i = 1; i < times.length; i++) {
    if (times[i] < nextAvailable) {
      continue;
    } else {
      nextAvailable = times[i] + Math.min(...times[i]);
      counter = counter + 1;
    }
  }
  console.log(counter);
};

// const maxEvents = (arrival, duration) => {
//   let counter = 1;
//   let nextAvailable = arrival[0] + duration[0];
//   for (let i = 1; i < arrival.length; i++) {
//     if (arrival[i] < nextAvailable) {
//       continue;
//     } else {
//       nextAvailable = arrival[i] + duration[i];
//       counter = counter + 1;
//     }
//   }
//   console.log(counter);
// };

maxEvents(arrival, duration);
