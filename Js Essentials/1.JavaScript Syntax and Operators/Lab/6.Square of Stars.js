function solve(numberOfStars){
    if (numberOfStars == undefined){
        numberOfStars = 5;
    }

    let stars = '';

    for (let row = 0; row < numberOfStars; row++){

        for (let col = 0; col < numberOfStars; col++){
            stars += '* ';
        }

        console.log(stars);

        stars = '';
    }
}

solve(3);