// Escreva um programa que imprima os números de 1 a 25. Mas para múltiplos de três imprima "Fizz"
// em vez do número e para os múltiplos de cinco imprima "Buzz". Para números que são múltiplos de três e cinco, imprima "FizzBuzz"

// Ex saida:
// [
//     1,          2,      'Fizz',     3,      4,
//     'Buzz',     5,      'Fizz',     6,      7,
//     8,          'Fizz', 9,          'Buzz', 10,
//     11,         'Fizz', 12,         13,     14,
//     'FizzBuzz', 15,     16,         17,     'Fizz',
//     18,         19,     'Buzz',     20,     'Fizz',
//     21,         22,     23,         'Fizz', 24,
//     'Buzz',     25,     26,         'Fizz', 27,
//     28,         29,     'FizzBuzz', 30,     31,
//     32,         'Fizz', 33,         34,     'Buzz',
//     35,         'Fizz', 36,         37,     38,
//     'Fizz',     39,     'Buzz',     40,     41,
//     'Fizz',     42,     43,         44,     'FizzBuzz',
//     45,         46,     47,         'Fizz', 48,
//     49,         'Buzz', 50
//   ]

/**
 * @param {number} number
 * @param {number} multipleOf
 */
function isMultipleOf(number, multipleOf) {
  return number % multipleOf === 0;
}

/**
 * @param {number} numbers
 * @returns {(number | string)[]}
 */
function fizzBuzz(number) {
  const numbersList = [...Array(number).keys()].map((num) => num + 1);

  const formattedNumbers = [...numbersList].reduce((acc, number) => {
    if (isMultipleOf(number, 3) && isMultipleOf(number, 5)) {
      acc.push("FizzBuzz");
    } else if (isMultipleOf(number, 5)) {
      acc.push("Buzz");
    } else if (isMultipleOf(number, 3)) {
      acc.push("Fizz");
    }

    acc.push(number);
    return acc;
  }, []);

  return formattedNumbers;
}

export default fizzBuzz;
