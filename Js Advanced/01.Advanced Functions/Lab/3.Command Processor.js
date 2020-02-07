function solve(inputArgs) {
    function appendString(word, result) {
        return result += word;
    }

    function removeStart(result, count) {
        return result.substr(count);
    }

    function removeEnd(result, count) {
        return result.substr(0, result.length - count);
    }

    let result = '';

    for (let element of inputArgs) {
        let tokens = element.split(' ').filter(x => x !== '');

        let command = tokens[0];
        
        if (command === 'print') {
            console.log(result);
        } else if (command === 'append') {
            let word = tokens[1];
            result = appendString(word, result);
        } else if (command === 'removeStart') {
            let count = parseInt(tokens[1]);
            result = removeStart(result, count);
        } else if (command === 'removeEnd') {
            let count = parseInt(tokens[1]);
            result = removeEnd(result, count);
        }
    }
}