const name = "Ragavendiran";

const firstRepeatingLetter = (str) => {
    const seen = {};

    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]]) {
            return `The first repeating letter is ${str[i]}`;
        }

        seen[str[i]] = true;
    }

    return "No repeating letters";
};

console.log(firstRepeatingLetter(name));




// using Set

const firstRepeatingLetter = (str) => {
    const seen = new Set();

    for (const char of str) {
        if (seen.has(char)) {
            return char;
        }

        seen.add(char);
    }

    return null;
};

console.log(firstRepeatingLetter("Ragavendiran"));


// Chat count 

const countCharacters = (str) => {
    const count = {};

    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    return count;
};

console.log(countCharacters("Ragavendiran"));