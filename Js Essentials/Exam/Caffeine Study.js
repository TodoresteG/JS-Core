function solve(days) {
    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {
        consumedCaffeine += 180; // morning cafes
        consumedCaffeine += 40; // lunch colas
        consumedCaffeine += 210; // brunch teas

        if (i % 5 === 0) {
            consumedCaffeine += 450; // energy drinks
        }

        if (i % 9 === 0) {
            consumedCaffeine += 80 + 300;
        }
    }
    
    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`);
}

solve(8);