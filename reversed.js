
function splitter(str = "", delimiter = " ") {
    let splitted = [''];
    let count = 0;

    for (let i = 0; i <= str.length; i++) {
        if (str.charAt(i) === delimiter) {
            count++;
            splitted.push('');
            continue;
        }
        splitted[count] += str.charAt(i);
    }

    return splitted;
}

function reverseWord(str = "") {
    let saveWord = splitter(str);
    let reversed = "";

    for (let i = saveWord.length - 1; i >= 0; i--) {
        reversed += saveWord[i] + " ";
    }

    return reversed;
}

console.log(reverseWord("you find go"));