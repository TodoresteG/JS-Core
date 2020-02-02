function solve() {
    let exerciseDiv = document.getElementById('exercise');
    let sections = exerciseDiv.getElementsByTagName('section');
    let inputSection = sections[0];
    let infoSection = sections[1];

    let backupTiresFieldset = infoSection.getElementsByTagName('fieldset')[0];
    let trucksFieldset = infoSection.getElementsByTagName('fieldset')[1];

    let inputFieldsets = inputSection.getElementsByTagName('fieldset');
    let newTruckFieldset = inputFieldsets[0];
    let newTiresFieldset = inputFieldsets[1];
    let workFieldset = inputFieldsets[2];

    let addNewTruckButton = newTruckFieldset.getElementsByTagName('button')[0];

    let trucks = [];
    let plateNumbers = [];
    let backupTires = [];

    addNewTruckButton.addEventListener('click', () => {
        let plateNumber = document.getElementById('newTruckPlateNumber').value;
        let tires = document.getElementById('newTruckTiresCondition').value;
        let parsedTires = tires.split(' ').filter(t => t !== '').map(t => parseInt(t));

        if (plateNumbers.includes(plateNumber) === false) {
            let newTruckDiv = document.createElement('div');

            let truck = {
                'plateNumber': plateNumber,
                'tires': parsedTires,
                'distance': 0
            };

            newTruckDiv.textContent = plateNumber;
            newTruckDiv.className = 'truck';
            trucks.push(truck);
            plateNumbers.push(plateNumber);

            trucksFieldset.appendChild(newTruckDiv);
        }
    });

    let addNewTiresButton = newTiresFieldset.getElementsByTagName('button')[0];

    addNewTiresButton.addEventListener('click', () => {
        let tires = document.getElementById('newTiresCondition').value;
        let newTiresDiv = document.createElement('div');
        newTiresDiv.className = 'tireSet';
        newTiresDiv.textContent = tires;
        backupTires.push(tires);

        backupTiresFieldset.appendChild(newTiresDiv);
    });

    let workButton = workFieldset.getElementsByTagName('button')[0];

    workButton.addEventListener('click', () => {
        let workPlateNumber = document.getElementById('workPlateNumber').value;
        let distance = parseInt(document.getElementById('distance').value);

        let workingTruck = trucks.filter(t => t.plateNumber === workPlateNumber)[0];
        
        if (workingTruck) {
            let neededQuality = distance / 1000;
            let needChange = false;
            let splittedTires = workingTruck.tires;
            
            for (let i = 0; i < splittedTires.length; i++) {
                let tire = Number(splittedTires[i]);
                
                if (tire < neededQuality) {
                    needChange = true;
                    break;
                }
                
                tire -= neededQuality;
                splittedTires[i] = tire;
            }
            
            if (needChange && backupTires.length > 0) {
                splittedTires = backupTires.shift().split(' ').filter(t => t !== '');
                needChange = false;
                let childToRemove = backupTiresFieldset.getElementsByTagName('div')[1];
                backupTiresFieldset.removeChild(childToRemove);
                
                for (let i = 0; i < splittedTires.length; i++) {
                    let tire = Number(splittedTires[i]);
                    
                    if (tire < neededQuality) {
                        needChange = true;
                        break;
                    }
                    
                    tire -= neededQuality;
                    splittedTires[i] = tire;
                }
            }

            if (needChange === false) {
                workingTruck.tires = splittedTires;
                workingTruck.distance += distance;
            }
        }
    });

    let reportTextarea = document.getElementsByTagName('textarea')[0];
    let reportButton = inputSection.getElementsByTagName('button')[3];

    reportButton.addEventListener('click', () => {
        for (let truck of trucks) {
            reportTextarea.textContent += `Truck ${truck.plateNumber} has traveled ${truck.distance}.\n`;
        }
        
        reportTextarea.textContent += `You have ${backupTires.length} sets of tires left.\n`;
    });

}