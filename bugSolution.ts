function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: both parameters must be numbers or numeric strings.');
  }
  return numA + numB;  
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe("1", 2); // Safe handling of string input
let result3 = addSafe("a", 2); // throws error
console.log(result1, result2, result3); 