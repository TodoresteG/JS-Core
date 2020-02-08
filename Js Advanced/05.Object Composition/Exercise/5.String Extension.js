const test = (function() {
    String.prototype.ensureStart = function(str) {
        if (this.includes(str) === false) {
            for (const symbol of [...str]) {
                [...this].unshift(symbol);
            }
        }

        return this;
    };

    String.prototype.ensureEnd = function(str) {
        if (this.includes(str) === false) {
            for (const symbol of [...str]) {
                [...this].push(symbol);
            }
        }

        return this;
    };

    String.prototype.isEmpty = function() {
        return this.length > 0;
    };

    return this;
}());

test.ensureStart('hello');