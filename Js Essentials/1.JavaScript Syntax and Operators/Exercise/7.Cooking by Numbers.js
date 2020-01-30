function solve(inputArgs) {
    let number = Number(inputArgs[0]);

    for (let i = 1; i < inputArgs.length; i++) {
        let command = inputArgs[i];

        switch (command) {
            case 'chop': 
            number = number / 2; 
            console.log(number);

            break;
            case 'dice':
            number = Math.sqrt(number); 
            console.log(number);

            break;
            case 'spice':
            number = number + 1; 
            console.log(number);

            break;
            case 'bake':
            number = number * 3;
            console.log(number);

            break;
            case 'fillet':
            let percentage = (number / 100) * 20;
            number -= percentage;
            console.log(number);
            
            break;
        }
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);