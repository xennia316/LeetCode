function romanToInt(s: string): number {
  
    let answer = 0;

    let romanMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    for (let i = 0; i < s.length ; i++) {
        let j = i + 1;

        let firstNumber = romanMap.get(s[i]);
        let secondNumber = romanMap.get(s[j]);

        if (firstNumber < secondNumber) {
            answer -= firstNumber;
        } else {
            answer += firstNumber;
        }
    }

    return answer;
}
