
// 1. Create a function that takes a parameter, the parameter should expect an array of numbers when the
// function is invoked. This function should return an object of key value pairs, the key should be the
// number in the array and the value should be the number of times that number(key) appears in the
// array.
// Example: [1,2,2,3,3,4,4,5,5,5]
// Return value on console: {&quot;1&quot;:1, &quot;2&quot;:2, &quot;3&quot;:2, &quot;4&quot;:2, &quot;5&quot;: 3}


function cntOccurrences(array) {
    let occurrences = {};
    
    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      if (occurrences[num]) {
        occurrences[num] += 1;
      } else {
        occurrences[num] = 1;
      }
    }

    return occurrences;
}

let array  = [1,2,2,3,3,4,4,5,5,5];
console.log(cntOccurrences(array));


// Output: {"1":1, "2":2, "3":2, "4":2, "5": 3}

