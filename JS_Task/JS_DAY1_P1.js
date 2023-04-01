/*Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in the same order.
"h,o,l,a"

SOL)*/
const input = prompt ("Enter a comma-separated list of elements:");
const arr = input.split(",");
const result = arr.join(",");
console.log(result);
