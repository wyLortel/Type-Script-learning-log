const operations = {
  add(n1: number, n2: number): number {
    return n1 + n2;
  },
  subract: function (n1: number, n2: number): number {
    return n1 - n2;
  },
  multiply: (n1: number, n2: number) => n1 * n2,
};

function fetchData(callback: (data: string) => void) {
  callback('some data');
}

fetchData((data: string): void => {
  console.log(data);
});

function processData(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}

processData('hello', (result: string): void => {
  console.log(result);
});

function doubleNum(item: number): void {
  console.log(item * 2);
}

function powNum(item: number): void {
  console.log(item * item);
}

function processItems(items: number[], callback: (item: number) => void) {
  items.forEach((item) => {
    callback(item);
  });
}

processItems([1, 2, 3], doubleNum);
processItems([1, 2, 3], powNum);

function fetchData1(
  callback: (error: Error | null, data: string | null) => void,
) {
  setTimeout(() => {
    //
    //
    callback(new Error('Data Fetched Failed'), null);
  }, 1000);
}

fetchData1((error: Error | null, data: string | null): void => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

function fetchData2(callback: (data: string) => void) {
  callback('some data');
}

fetchData2((data) => {
  console.log(data);
});

function processData1(data: string, callback: (result: string) => void) {
  const result = data.toUpperCase();
  callback(result);
}

processData1('hello', (result) => {
  console.log(result);
});
