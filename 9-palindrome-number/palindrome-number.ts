function isPalindrome(x: number): boolean {
    return x == Number(String(x).split("").reverse().join(""));
}
