function solve(day, service, time) {
    let result;

    switch (service) {
        case "Fitness":
            if (time >= 8.00 && time  <= 15.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result = 5.00; break;
                    case "Saturday":
                    case "Sunday": result = 8.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else if (time > 15.00 && time <= 22.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result = 7.50; break;
                    case "Saturday":
                    case "Sunday": result = 8.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else{
                console.log("Invalid time.");
            }
            break;
        case "Sauna":
            if (time >= 8.00 && time <= 15.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result = 4.00; break;
                    case "Saturday":
                    case "Sunday": result = 7.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else if (time > 15.00 && time <= 22.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result = 6.50; break;
                    case "Saturday":
                    case "Sunday": result = 7.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else{
                console.log("Invalid time.");
            }
            break;
        case "Instructor":
            if (time >= 8.00 && time  <= 15.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result =  10.00; break;
                    case "Saturday":
                    case "Sunday": result =  15.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else if (time > 15.00 && time <= 22.00){
                switch (day) {
                    case "Monday":
                    case "Tuesday":
                    case "Wednesday":
                    case "Thursday":
                    case "Friday": result = 12.50; break;
                    case "Saturday":
                    case "Sunday": result = 15.00; break;
                    default:
                        console.log("Invalid day.");
                        return;
                }
            }
            else{
                console.log("Invalid time.");
            }
            break;
        default:
            console.log("Service not supported.");
    }

    console.log(result);
}

solve('Saturday', 'Fitness', 22.00);

