function sum(n) {
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < i; j++) {
            j = j+1;
        }
    }
};

console.log(sum(10));