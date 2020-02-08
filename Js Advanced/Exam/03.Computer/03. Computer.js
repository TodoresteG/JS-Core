class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = []; 
        this.ramUsage = 0;
        this.cpuUsage = 0;
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }

        const program = {
            'name': name,
            'requiredSpace': requiredSpace
        };

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;

        return program;
    };

    uninstallAProgram(name) {
        const program = this.installedPrograms.find(x => x.name === name);

        if (!program) {
            throw new Error('Control panel is not responding');
        }

        this.hddMemory += program.requiredSpace;
        const index = this.installedPrograms.indexOf(program);
        this.installedPrograms.splice(index, 1);

        return this.installedPrograms;
    };

    openAProgram(name) {
        const program = this.installedPrograms.find(x => x.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        const test = this.taskManager.find(x => x.name === name);

        if (test) {
            throw new Error(`The ${name} is already open`);
        }

        const requiredRam = (program.requiredSpace / this.ramMemory) * 1.5;
        const requiredCpu = ( ( program.requiredSpace / this.cpuGHz ) / 500) * 1.5;

        if (this.ramUsage + requiredRam >= 100) {
            throw new Error(`${program.name} caused out of memory exception`);
        }

        if (this.cpuUsage + requiredCpu >= 100) {
            throw new Error(`${program.name} caused out of cpu exception`);
        }

        const runningProgram = {
            'name': name,
            'ramUsage': requiredRam,
            'cpuUsage': requiredCpu
        };

        this.ramUsage += requiredRam;
        this.cpuUsage += requiredCpu;

        this.taskManager.push(runningProgram);

        return runningProgram;
    };

    taskManagerView() {
        let result = '';

        if (this.taskManager.length === 0) {
            result = 'All running smooth so far';
        } else {
            for (const element of this.taskManager) {
                result += `Name - ${element.name} | Usage - CPU: ${element.cpuUsage.toFixed(0)}%, RAM: ${element.ramUsage.toFixed(0)}%\n`;
            }
        }

        return result.trimRight();
    };
}

let computer = new Computer(4096, 7.5, 250000);

computer.taskManagerView();
computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');
computer.openAProgram('Excel');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);
