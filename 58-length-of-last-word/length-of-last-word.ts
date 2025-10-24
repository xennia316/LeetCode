function lengthOfLastWord(s: string): number {
    let words = s.trim().split(" ")

    let lastWord = words[words.length - 1]

    return lastWord.length
};