function add(n1: number, n2: number): void {
  console.log(n1 + n2);
}

add(10, 20);

function add2(n1: number, n2: number): number {
  return n1 + n2;
}

add2(10, 20);

const add3: (n1: number, n2: number) => number = function (n1, n2) {
  return n1 + n2;
};

const printHello: () => void = function () {
  console.log('Hello');
};
