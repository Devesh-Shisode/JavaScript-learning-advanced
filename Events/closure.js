function example() {
  function ex2() {
    let a = 2;
    console.log(a);
  }

  return ex2;
}

let ex = example();

ex();
