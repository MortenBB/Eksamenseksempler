var array = [1, 4, 9, 16];

mapped = array.map(num => num+1)
console.log(mapped)
//Output: [2,5,10,17]

filtered = array.filter(num =>num%2===0)
console.log(filtered)
//Output: [4,16]

reduced = array.reduce((total, num) => total + num)
console.log(reduced)
//Output: 30