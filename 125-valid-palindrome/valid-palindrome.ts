function isPalindrome(s: string): boolean {
    let string = s.toLowerCase().replace(/[\W_]/g, '')

    let reversedString = string.split('').reverse().join('')

    return string === reversedString
};