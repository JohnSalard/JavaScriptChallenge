// function APIAsynchronous(text, time, callback) {
//   setTimeout(() => {
//     console.log(text);
//     if (callback) {
//       callback();
//     }
//   }, time);
// }

function APIAsynchronous(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, time);
  });
}

// APIAsynchronous("A", 1000).then(() => [APIAsynchronous("B", 500)]);

async function run() {
  console.time("start");
  await APIAsynchronous("A", 5000);
  await APIAsynchronous("B", 4000);
  await APIAsynchronous("C", 3000);
  await APIAsynchronous("D", 2000);
  console.timeEnd("start");
}

run();
