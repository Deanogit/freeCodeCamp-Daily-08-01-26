## Array Sorting Validator

A diagnostic utility that analyses a sequence of numbers to determine its mathematical direction: Ascending, Descending or Not Sorted.

### The Logic

The function uses a **Negative Elimination** strategy. Instead of trying to prove an array is sorted, it assumes the array is both ascending and descending until it finds evidence that contradicts those assumptions.

### The Inspection Process:

    1. Initialisation: Two boolean flags, `isAsc` and `isDesc`, start as `true`.

    2. Inspection: The loop compares each number at index `i` to its neighbour at `i + 1`.

        -   if arr[i] >= arr[i + 1], the sequence cannot be strictly ascending.
        -   if arr[i] <= arr[i + 1], the sequence cannot be strictly descending.

    3. The Ternary Decision: A nested ternary operator evaluates the final state of the flags to return the result.

### Implementation

```JavaScript

function isSorted(arr) {
  let isAsc = true;
  let isDesc = true;

  // Stop at length - 1 to avoid comparing the last element to 'undefined'
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) isAsc = false;
    if (arr[i] <= arr[i + 1]) isDesc = false;
  }

  // Nested ternary for a concise return
  return isAsc ? 'Ascending' : isDesc ? 'Descending' : 'Not Sorted';
}

```

### What I Learned

1. The Flag Pattern

I learned to use boolean flags to track the state of a data structure through a loop. This prevents "early exit" bugs where a function returns a result based only on the first few elements of an array.

2. Look-Ahead Indexing

I practiced the `arr.length - 1` boundary. This is critical when comparing `arr[i]` to `arr[i + 1]` to ensure the loop doesn't try to access an index outside the bounds of the array, which would result in comparing a number to `undefined`.

3. Nested Ternary Operators

I learned how to use ternary operators to handle multiple conditions in a single line. It serves as a clean alternative to `if /else if/ else` blocks when the goal is simply to return a specific string based on boolean states.

4. Mathematical Strictness

By using `>=` and `<=`, I ensured that "plateaus" (identical adjacent numbers) disqualify the array from being considered sorted. This enforces a strictly ascending or descending requirement.
