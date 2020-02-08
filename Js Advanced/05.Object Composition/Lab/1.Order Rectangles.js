function solve(inputArgs) {
    function comparator(width, height) {
        const rectangle = {
            'width': width,
            'height': height,
            area() {
                return this.width * this.height;
            },
            compareTo(other) {
                const result = other.area() - this.area();
                return result || other.width - this.width;
            }
        };

        return rectangle;
    }

    let rectangles = [];

    for (const element of inputArgs) {
        const [width, height] = element;
        const rectangle = comparator(width, height);
        rectangles.push(rectangle);
    }

    const sortedRectangles = rectangles.sort((a, b) => {
        return a.compareTo(b);
    });

    return sortedRectangles;
}

console.log(solve([[10, 5], [5, 12]]));