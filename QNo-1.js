function balance(str) {
    const stack = [];
    for (let char of str) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(balance("(())"))
console.log(balance("(()"))
console.log(balance("((){})"))
console.log(balance("(()({}))"))