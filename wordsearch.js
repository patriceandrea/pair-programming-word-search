const wordSearch = (letters, word) => {
    // Check horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        if (l.split("").reverse().join("").includes(word)) return true
    }

    const y = letters.length;
    const x = letters[0] ? letters[0].length : 0;

    // Check vertically
    for (let i = 0; i < x; i++) {
        let string = "";
        for (let j = 0; j < y; j++) {
            string += letters[j][i];
        }
        if (string.includes(word)) return true
        if (string.split("").reverse().join("").includes(word)) return true
    }

    // Check diagonally up-right/down-left
    // This loop checks the longest diagonal and above
    for (let i = y - 1; i >= 0; i--) {
        let string = "";  // init empty string to push to
        for (let j = 0; j <= x - 1; j++) {
            // Check if coordinates in bound; if yes, append to string
            let iCheck = i - j;
            let jCheck = j;
            if ((iCheck) < y && (iCheck) >= 0 && jCheck < x && jCheck >= 0) {
                string += letters[iCheck][jCheck];
            }
        }
        if (string.includes(word)) return true
        if (string.split("").reverse().join("").includes(word)) return true
    }
    // This loop checks the longest diagonal and below
    for (let i = 0; i < y - 1; i++) {
        let string = "";  // init empty string to push to
        for (let j = 0; j < x; j++) {
            let iCheck = y - 1 - j + i;
            let jCheck = j;
            if ((iCheck) < y && (iCheck) >= 0 && jCheck < x && jCheck >= 0) {
                string += letters[iCheck][jCheck];
            }
        }
        if (string.includes(word)) return true
        if (string.split("").reverse().join("").includes(word)) return true
    }

    // Check diagonally up-left/down-right
    // This loop checks the longest diagonal and above
    for (let i = y - 1; i >= 0; i--) {
        let string = "";  // init empty string to push to
        for (let j = 0; j <= x - 1; j++) {
            let iCheck = i - j;
            let jCheck = x - 1 - j;
            // Check if coordinates in bound; if yes, append to string
            if ((iCheck) < y && (iCheck) >= 0 && jCheck < x && jCheck >= 0) {
                string += letters[iCheck][jCheck];
            }
        }
        if (string.includes(word)) return true
        if (string.split("").reverse().join("").includes(word)) return true
    }
    // This loop checks the longest diagonal and below
    for (let i = 0; i < y - 1; i++) {
        let string = "";  // init empty string to push to
        for (let j = 0; j < x; j++) {
            let iCheck = y - 1 - j + i;
            let jCheck = x - 1 - j;
            // Check if coordinates in bound; if yes, append to string
            if ((iCheck) < y && (iCheck) >= 0 && jCheck < x && jCheck >= 0) {
                string += letters[iCheck][jCheck];
            }
        }
        if (string.includes(word)) return true
        if (string.split("").reverse().join("").includes(word)) return true
    }

    // Return false if all checks failed
    return false;
}

module.exports = wordSearch

/*
const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD')
*/