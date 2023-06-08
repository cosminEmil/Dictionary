let wordsSet = new Set();

function searchWord() {
    let word = document.getElementById("search_Text-Box").value;
    if(wordsSet.has(word)) {
        alert("Word found");
    } else {
        alert("Word not found");
    }
}

function addWord() {
    let word = document.getElementById("add_Text-Box").value;
    wordsSet.add(word);
    alert("Word added successfully!");
    document.getElementById("add_Text-Box").value ="";
}
