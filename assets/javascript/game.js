var beers = [
    "modelo", "pacifico", "dosxx", "pacifico", "estrella", "bohemia"
];
//getting my word
var rand = beers[Math.floor(Math.random() * beers.length)];

console.log(rand);

//Displays hidden word inside the container
function displayWordHidden(actualword) {
    //modelo ->  ______
    var hiddenWord = actualword.replace(/./g, '_');
    var html = "<p>" + hiddenWord + "</p>";
    document.querySelector("#hiddenWord").innerHTML = html;
}
console.log(hiddenWord);
//only at start
displayWordHidden(rand);

function letterInput(key) {
    var wordBank = rand.split("");
    for (var i = 0; i < wordBank.length; i++) {
        if (key === wordBank[i]) {
            var wordDisect = hiddenWord.split("");
            wordDisect[i] = key;
            hiddenWord = wordDisect.join("")
        }
    }

}


// a key that is pressed down
document.onkeyup = function (event) {
    var key = event.key.toLowerCase;

    if (rand.indexOf(key) !==-1) {
        letterInput(key);
        document.querySelector("#hiddenWord").innerHTML = hiddenWord;
    }



    



}





