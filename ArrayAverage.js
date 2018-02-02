let numbers = [4, 8, 15, 16, 23, 42],
sum, average;

sum = numbers.reduce((total, one_number) => total + one_number, 0);
average = sum / numbers.length

console.log(average);
