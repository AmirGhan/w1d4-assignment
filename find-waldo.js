
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i); 
    }
  }
}

function actionWhenFound(indexNumber) {
  console.log("Found Waldo at index " + indexNumber + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);