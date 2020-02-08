function solve(inputArgs) {
    const listProcessor = function() {
        let innerCollection = [];

        const innerObj = {
            add(str) {
                innerCollection.push(str);
            },
            remove(str) {
                innerCollection = innerCollection.filter(x => x !== str);
            },
            print() {
                console.log(innerCollection.join(','));
            }
        };

        return innerObj;
    }();

    for (const element of inputArgs) {
        const tokens = element.split(' ');
        const [command, text] = tokens;

        listProcessor[command](text);
    }

    return listProcessor;
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);