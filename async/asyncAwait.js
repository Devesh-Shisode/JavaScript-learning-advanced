function wait() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Done waiting!");
    }, 1000);
  });
}

async function run() {
  console.log("Start");
  const result = await wait();
  console.log(result); // waits here
  console.log("End");
}

run();
