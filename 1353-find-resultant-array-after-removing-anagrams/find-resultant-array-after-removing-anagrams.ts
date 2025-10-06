function removeAnagrams(words: string[]): string[] {

    for (let i = 1; i < words.length; i++) {
        let j = i - 1;

        let firstWord = words[j].split("").sort().join("");
        let secondWord = words[i].split("").sort().join("");

        if (firstWord === secondWord) {
            words.splice(i, 1);
            i = i - 1;
        }
    }

    return words;
}
