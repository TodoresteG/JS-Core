function solve(examPoints, completedHomework, totalHomework) {
    const courseMaxPoints = 100;
    const examMaxPoints = 400;
    let coursePoints = 0;
    let grade = 0;

    if (examPoints === examMaxPoints) {
        grade = 6;
    } else {
        let examPercentage = ((examPoints * 100) / examMaxPoints) / 100;
        coursePoints += examPercentage * 90;

        let homeworkPercentage = ((totalHomework * 100) / completedHomework) / 100;
        coursePoints += homeworkPercentage * 10;

        grade = 3 + 2 * (coursePoints - courseMaxPoints / 5) / (courseMaxPoints / 2);
    }

    if (grade < 3) {
        grade = 2;
    } else if (grade > 6) {
        grade = 6;
    }

    console.log(grade.toFixed(2));
}

solve(200, 5, 5);