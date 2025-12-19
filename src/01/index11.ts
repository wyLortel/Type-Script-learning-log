function printHello(): void {
  console.log('Hello');
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function greet(name: string): string {
  return `Hello,${name}`;
}

function findLongestString(strings: string[]): string | null {
  if (strings.length === 0) return null;
  return strings.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

const words: string[] = ['apple', 'banana', 'cherry', 'watermelon'];
const longestWord: string | null = findLongestString(words);
console.log(longestWord);
