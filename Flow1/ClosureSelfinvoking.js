//Eksempel 1:

var add = (function () {
    var counter = 0;
    return function () { counter += 1; console.log(counter)}
})();
add()
//Output: 1
add()
//Output: 2
add()
//Output: 3

//Eksempel 2:
function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
        return nameIntro + firstName + " " + lastName; 
    }
    return makeFullName ();
}
showName ("Michael", "Jackson");
//Output: Your name is Michael Jackson