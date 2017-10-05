var words = ["ground", "control", "to", "major", "tom"];
function map (array, callBack) {
	var result = [];
	array.forEach(function(element){
		result.push(callBack(element));
	})
	return result

}
var a = map(words, function(word) {
  	return word.length;
});

var b = map(words, function(word) {
  	return word.toUpperCase();
});

var c = map(words, function(word) {
  	return word.split('').reverse().join('');
});

console.log(a);
console.log(b);
console.log(c);