/**
 * 
 * @param {String} string 
 * @returns {Number}
 */
function lastWordLength(string) {
    var words = string.split(" ")
    return words[words.length - 1].length;
}



console.log(lastWordLength("Hello world"))