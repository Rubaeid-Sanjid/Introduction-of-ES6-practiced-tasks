// //Task 1:
const mult = (num1, num2, num3) => num1 * num2 * num3;

const result = mult(2, 3, 2);
console.log(result);

// //Task 2:
const text = `I am a web developer. I love to code.
I love to eat biryani.`;

console.log(text);

// //Task 3:
const add = (num1, num2 = 2) => num1 + num2;

const ans = add(5);
console.log(ans);

// //Task 4: Find the even names with their name length using arrrow function.
const takeName = (names) => {
    const evenNames = [];
    for (const name of names) {
        if(name.length % 2 === 0){
            evenNames.push(name);
            evenNames.push(name.length);
        }
    }
    return evenNames;
}
const friends = ['Dihan', 'Galib', 'Rafi', 'sabbir', 'Asif', 'Faisal', 'Alvi', 'Nahin']
const namesOfEven = takeName(friends);
console.log(namesOfEven);

// // Task 5: Write an arrow function which will do square of each elements,
// //          calculate the sum of the squared elements and 
// //          return the average of the sum of the squared elements.
const numbers = [2, 3, 2, 4];

const doMathOperation = numbers => {
    // const squaredNumbers = [];
    let sumOfSquared = 0;
    let countElement = 0;
    for (const number of numbers) {
        // squaredNumbers.push(number * number);
        sumOfSquared += (number * number);
        countElement++;
    }
    // return squaredNumbers;
    // return sumOfSquared;
    // return countElement;
    const avg = sumOfSquared / countElement;
    return avg;
}

const avgOfSquaredNumbers = doMathOperation(numbers);
console.log(avgOfSquaredNumbers);

// Task 6: Write an arrow function where it will do the following:
//          (a) It will take two array inputs
//          (b) Combine the two arrays and assign them in a new array
//          (c) Find the maximum number from the new array and return the result
const getMax = (array1, array2) => {
    const combinedArray = array1;
    for (const num of array2) {
        combinedArray.push(num);
    }
    const maximum = Math.max(...combinedArray);
    return maximum;
}
const numbers1 = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];

const maxNum = getMax(numbers1, numbers2);
console.log(maxNum);