/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (b < a && a > c) return a;
  if (a < b && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;

  const [leftRightX, leftRightY] =
    queen.x >= queen.y
      ? [queen.x - queen.y + 1, 1]
      : [1, queen.y - queen.x + 1];

  for (let [x, y] = [leftRightX, leftRightY]; x < 9 && y < 9; x += 1, y += 1) {
    if (king.x === x && king.y === y) return true;
  }

  const [rigthLeftX, rightLeftY] = [queen.x - (8 - queen.y), 8];
  for (let [x, y] = [rigthLeftX, rightLeftY]; x < 9 && y > 0; x += 1, y -= 1) {
    if (king.x === x && king.y === y) return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || c + b <= a) return false;
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumMap = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  const getDecimalCount = (summ, base) => [
    (summ - (summ % base)) / base,
    summ % base,
  ];

  const repeatStr = (str, count) => {
    let output = '';
    for (let i = 0; i < count; i += 1) output += str;
    return output;
  };

  const getRomanStr = (numMap, nums) => {
    let numSumRest = nums;
    let output = '';

    for (let i = 0; i < numMap.length; i += 1) {
      const [summ, base] = [numSumRest, numMap[i][0]];
      const [count, reminder] = getDecimalCount(summ, base);
      output += repeatStr(numMap[i][1], count);
      numSumRest = reminder;
    }

    return output;
  };

  const output = getRomanStr(romanNumMap, num);
  return output;
}
/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let output = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        output += 'one';
        break;

      case '2':
        output += 'two';
        break;

      case '3':
        output += 'three';
        break;

      case '4':
        output += 'four';
        break;

      case '5':
        output += 'five';
        break;

      case '6':
        output += 'six';
        break;

      case '7':
        output += 'seven';
        break;

      case '8':
        output += 'eight';
        break;

      case '9':
        output += 'nine';
        break;

      case '0':
        output += 'zero';
        break;

      case '.':
      case ',':
        output += 'point';
        break;

      case '-':
        output += 'minus';
        break;

      default:
        break;
    }
    if (i !== numberStr.length - 1) output += ' ';
  }
  return output;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;
  while (temp > 0) {
    if (temp % 10 === digit) return true;
    temp = (temp - (temp % 10)) / 10;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let right = 0;
  let left = 0;
  let summ = 0;

  for (let i = 0; i < arr.length; i += 1) summ += arr[i];
  for (let i = 0; i < arr.length; i += 1) {
    right = summ - left - arr[i];
    if (right === left) return i;
    left += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const getMatrix = (matrixSize) => {
    const matrix = [];
    let count = 1;
    for (let i = 0; i < matrixSize; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < matrixSize; j += 1) {
        matrix[i][j] = count;
        count += 1;
      }
    }
    return matrix;
  };
  const matrix = getMatrix(size);
  const output = getMatrix(size);

  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bot = matrix.length;

  let count = 1;
  while (left < right && top < bot) {
    for (let i = left; i < right; i += 1) {
      output[top][i] = count;
      count += 1;
    }
    top += 1;

    for (let i = top; i < bot; i += 1) {
      output[i][right - 1] = count;
      count += 1;
    }
    right -= 1;

    for (let i = right - 1; i >= left; i -= 1) {
      output[bot - 1][i] = count;
      count += 1;
    }
    bot -= 1;

    for (let i = bot - 1; i >= top; i -= 1) {
      output[i][left] = count;
      count += 1;
    }
    left += 1;
  }

  return output;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(eslintlol) {
  const matrix = eslintlol;
  const rotateDeg = 90;
  const getMatrix = (matrixSize) => {
    const matrixTemp = [];
    let count = 1;
    for (let i = 0; i < matrixSize; i += 1) {
      matrixTemp[i] = [];
      for (let j = 0; j < matrixSize; j += 1) {
        matrixTemp[i][j] = count;
        count += 1;
      }
    }
    return matrixTemp;
  };
  const output = getMatrix(matrix.length);

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      switch (rotateDeg) {
        case 90:
          output[j][matrix.length - i - 1] = matrix[i][j];
          break;

        case 180:
          output[matrix.length - i - 1][matrix.length - j - 1] = matrix[i][j];
          break;

        case 270:
          output[i][j] = matrix[i][j];
          break;

        case 360:
          output[i][j] = matrix[i][j];
          break;

        default:
          break;
      }
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      matrix[i][j] = output[i][j];
    }
  }

  return matrix;
}
/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const list = arr;
  for (let i = 0; i < list.length - 1; i += 1) {
    const gapVal = list[i + 1];
    let position = i;
    while (position >= 0 && list[position] > gapVal) {
      list[position + 1] = list[position];
      position -= 1;
    }
    list[position + 1] = gapVal;
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const shuffle = (input) => {
    let [evenOut, oddOut] = ['', ''];
    for (let i = 0; i < input.length; i += 1) {
      if (i % 2 === 0) evenOut += input[i];
      else oddOut += input[i];
    }
    return evenOut + oddOut;
  };

  let validCounts = 0;
  let result = null;
  while (result !== str) {
    result = shuffle(result || str);
    validCounts += 1;
    if (validCounts === iterations) return result;
  }
  validCounts = iterations % validCounts;

  result = str;
  while (validCounts > 0) {
    result = shuffle(result);
    validCounts -= 1;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const reverse = (arrList) => {
    const arr = arrList;
    for (let i = 0; i < arr.length / 2; i += 1) {
      [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
  };

  const getListOfNums = (n) => {
    let num = n;
    const numList = [];
    while (num > 0) {
      const digit = num % 10;
      numList.push(digit);
      num = (num - digit) / 10;
    }
    return reverse(numList);
  };
  const list = getListOfNums(number);
  if (list.length < 2) return number;

  let peakIdx = -1;
  for (let i = list.length - 1; i > 0; i -= 1) {
    if (list[i] > list[i - 1]) {
      peakIdx = i;
      break;
    }
  }

  if (peakIdx === -1) return number;

  let idx = peakIdx;
  for (let i = peakIdx; i < list.length; i += 1) {
    if (list[peakIdx - 1] < list[i] && list[i] < list[idx]) {
      idx = i;
    }
  }

  [list[idx], list[peakIdx - 1]] = [list[peakIdx - 1], list[idx]];

  const slice = (listArr, startIdx, endIdx) => {
    const arrayList = [];
    for (let i = startIdx; i < endIdx; i += 1) {
      arrayList[arrayList.length] = listArr[i];
    }
    return arrayList;
  };

  const sortList = (listToSort, order = 'ASC') => {
    const arrList = [...listToSort];
    let compare = () => {};
    if (order === 'ASC') compare = (a, b) => a > b;
    for (let i = 0; i < arrList.length - 1; i += 1) {
      for (let j = i + 1; j < arrList.length; j += 1) {
        if (compare(arrList[i], arrList[j])) {
          [arrList[i], arrList[j]] = [arrList[j], arrList[i]];
        }
      }
    }
    return arrList;
  };

  const head = slice(list, 0, peakIdx);
  const tail = sortList(slice(list, peakIdx, list.length), 'ASC');

  const concat = (headList, tailList) => {
    const res = [];
    for (let i = 0; i < headList.length; i += 1) {
      res[res.length] = headList[i];
    }
    for (let i = 0; i < tailList.length; i += 1) {
      res[res.length] = tailList[i];
    }

    return res;
  };

  const arrayToNum = (arr) => {
    let n = 0;
    for (let i = 0; i < arr.length; i += 1) {
      n = n * 10 + arr[i];
    }
    return n;
  };

  return arrayToNum(concat(head, tail));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
