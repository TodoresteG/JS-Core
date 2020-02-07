function solve(name, age, weight, height) {
    let heightInMeters = height / 100;
    let bmiIndex = Math.round(weight / (heightInMeters ** 2));
    let status = '';

    if (bmiIndex < 18.5) {
        status = 'underweight'
    } else if (bmiIndex >= 18.5 &&  bmiIndex < 25) {
        status = 'normal';
    } else if (bmiIndex >= 25 && bmiIndex < 30) {
        status = 'overweight';
    } else if (bmiIndex >= 30) {
        status = 'obese';
    }

    let patientChart = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        },
        'BMI': bmiIndex,
        'status': status
    };

    if (status === 'obese') {
        patientChart['recommendation'] = 'admission required';
    }

    return patientChart
}

console.log(solve('Honey Boo Boo', 9, 57, 137));