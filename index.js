// Sorted Array?
// Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

// If the given array is:

// In ascending order (lowest to highest), return "Ascending".
// In descending order (highest to lowest), return "Descending".
// Not sorted in ascending or descending order, return "Not sorted".

// function isSorted(arr) {
//   // console.log(arr)

//   for (let i = 0; i < arr.length - 1; i++) {
//     // acending
//     if (arr[i] < arr[i + 1]) {
//       return 'Ascending';
//     }
//   }

//   // if (arr[i] < arr[i + 1]) {
//   // return
//   // }
//   // return arr;
// }

function isSorted(arr) {
  // console.log(arr)

  let isAsc = true;
  let isDesc = true;

  for (let i = 0; i < arr.length - 1; i++) {
    // acending
    if (arr[i] >= arr[i + 1]) {
      isAsc = false;
    }

    // descending
    if (arr[i] <= arr[i + 1]) isDesc = false;
  }

  if (!isAsc && !isDesc) return 'Not sorted';
  else if (isAsc) return 'Ascending';
  else return 'Descending';

  // if (arr[i] < arr[i + 1]) {
  // return
  // }
  // return arr;
}
