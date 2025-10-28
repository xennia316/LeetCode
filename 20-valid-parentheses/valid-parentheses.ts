function isValid(s: string): boolean {

    let checker = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    let stack = []

    for (let char of s) {

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
            continue;
        }

        let complement = checker[char]
        let actual = stack.pop()

        if (actual !== complement) {
            return false
        }


    }

    return stack.length === 0
};