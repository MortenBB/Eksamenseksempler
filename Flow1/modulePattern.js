var modularpattern = (function() {
	// your module code goes here
	var sum = 0;

	return {
		add: function() {
			sum = sum + 1;
			return sum;
		},
		reset: function() {
			return (sum = 0);
		}
	};
})();
console.log(modularpattern.add());
console.log(modularpattern.add());
console.log(modularpattern.reset());
/*
Output:
1
2
0
*/
