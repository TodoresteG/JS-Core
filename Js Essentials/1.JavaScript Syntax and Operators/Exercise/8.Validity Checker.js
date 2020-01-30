function solve(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    if (x1 >= 0 && y1 <= 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (x2 <= 0 && y2 >= 0) {
          console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else {
          console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    
    if (x1 >= x2 && y1 <= y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
      }
      else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
      }
}

solve([2, 1, 1, 1]);