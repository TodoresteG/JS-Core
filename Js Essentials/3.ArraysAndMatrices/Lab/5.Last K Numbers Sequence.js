function solve(n, k) {
    let result = 1;
    let sequence = [];

    for (let i = 0; i < n; i++) {
        let currentResult = 0;

        if (i === 0) {
            sequence.push(result);
            continue;
        }

        for (let j = i; j < k + i; j++) {
            let tester = j - k;

            if (j - k >= 0) {
                currentResult += sequence[tester];
            }
        }

        sequence.push(currentResult);
    }

    console.log(sequence.join(' '));
}

solve(8, 2);