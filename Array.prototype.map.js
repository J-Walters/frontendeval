/*
Prompt
map is a function on the JavaScipt Array prototype that can be provided a callback, which will be called for every element in the array 
- the return value will be a new array containing the original elements after they have been passed through the callback. 
*/

function map(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    let elem = callback(array[i])
    result.push(elem)
  }
  return result
}

// function map(arr, cb) {
//   const result = []
//   let i = 0
//   while(arr[i]) {
//     result.push(cb(arr[i]))
//     i++
//   }
//   return result
// }

console.log(map([1, 2, 3, 4], (x) => x * 2))