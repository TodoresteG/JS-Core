function solve(...args) {
    let obj = {};

    for (let element of args) {
        let type = typeof element;

        if (type === 'object') {
            console.log(`${type}:`);
        } else if (type === 'undefined') {
            console.log('undefined: undefined');
        } else {
            console.log(`${type}: ${element}`);
        }

        if (obj.hasOwnProperty(type) === false) {
            obj[type] = 1;
        } else {
            obj[type] += 1;
        }
    }

    let test = Object.entries(obj);

    test = test.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let [key, value] of test) {
        console.log(`${key} = ${value}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999, undefined);