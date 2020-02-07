class List {
    constructor() {
        this._customList = [];
        this.size = 0;
    }

    add(element) {
        this._customList.push(element);
        this.sort();
        this.size += 1;
    }

    remove(index) {
        if (index > this._customList.length || this.size === 0 || index < 0) {
            throw new Error('Invalid index!');
        }

        this._customList.splice(index, 1);
        this.sort();
        this.size -= 1;
    }

    get(index) {
        if (index > this._customList.length || index < 0) {
            throw new Error('Invalid index!');
        }

        return this._customList[index];
    }

    sort() {
        this._customList = this._customList.sort((a, b) => {
            return a - b;
        });

        return this._customList;
    }
}

const list = new List();

for (let i = 0; i < 10; i++) {
    list.add(i);
}
