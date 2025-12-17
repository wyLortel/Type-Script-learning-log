let list1: [] = [];

let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];

let list4: string[] = ['a', 'b', 'c'];
let list5: Array<string> = ['a', 'b', 'c'];

let list6: boolean[] = [true, false, true];
let list7: Array<boolean> = [true, false, true];

let list8: null[] = [null, null];
let list9: Array<null> = [null, null];

let list10: undefined[] = [undefined, undefined];
let list11: Array<undefined> = [undefined, undefined];

let list12: { name: string }[] = [{ name: 'jack' }, { name: 'tom' }];
let list13: Array<{ name: string }> = [{ name: 'jack' }, { name: 'tom' }];

let list14: (() => void)[] = [function () {}, function () {}];
let list15: Array<() => void> = [function () {}, function () {}];

let list16: [number, string, boolean] = [1, 'a', true];

let obj1: {
  job: string;
  getJob: () => string;
} = {
  job: 'developer',
  getJob: function () {
    return this.job;
  },
};

let obj2: {
  skill: string[];
  job: string;
  getJob: () => string;
} = {
  skill: ['javascript', 'typescript'],
  job: 'developer',
  getJob: function () {
    return this.job;
  },
};
