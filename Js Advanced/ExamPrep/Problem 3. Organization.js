class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this._departmentBudgets = this.departmentsBudget;
    }

    get departmentsBudget() {
        return {
            'marketing': this.budget * 0.4,
            'finance': this.budget * 0.25,
            'production': this.budget * 0.35
        };
    }

    add(employeeName, department, salary) {
        if (this._departmentBudgets[department] >= salary) {
            const employee = { employeeName, department, salary };
            this.employees.push(employee);
            this._departmentBudgets[department] -= salary;

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this._departmentBudgets[department]}.`;
    }

    employeeExists(employeeName) {
        const employee = this.employees.find(x => x.employeeName === employeeName);

        if (employee) {
            return `Mr./Mrs. ${employee.employeeName} is part of the ${employee.department} department.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    leaveOrganization(employeeName) {
        const employee = this.employees.find(x => x.employeeName === employeeName);

        if (employee) {
            this._departmentBudgets[employee.department] += employee.salary;
            this.employees = this.employees.filter(x => x.employeeName !== employee.employeeName);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employee.employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    status() {
        let result = `${this.name.toUpperCase()} DEPARTMENTS: \n`;

        const marketingEmployees = this.employees.filter(x => x.department === 'marketing').sort((a, b) => {
            return b['salary'] - a['salary'];
        }).map(x => x['employeeName']);
        result += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.join(', ')} |  Remaining Budget: ${this._departmentBudgets['marketing']}`;

        const financeEmployees = this.employees.filter(x => x.department === 'finance').sort((a, b) => {
            return b['salary'] - a['salary'];
        }).map(x => x['employeeName']);
        result += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.join(', ')} |  Remaining Budget: ${this._departmentBudgets['finance']}`;

        const productionEmployees = this.employees.filter(x => x.department === 'production').sort((a, b) => {
            return b['salary'] - a['salary'];
        }).map(x => x['employeeName']);
        result += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.join(', ')} |  Remaining Budget: ${this._departmentBudgets['production']}`;

        return result;
    }
}

let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Todor', 'marketing', 2500));
console.log(organization.add('Stamat', 'marketing', 1550));
console.log(organization.add('Koleca', 'finance', 2000));
console.log(organization.add('Grisho', 'finance', 3000));
console.log(organization.add('Robert', 'production', 2000));
console.log(organization.employeeExists('asdfd'));
//console.log(organization.leaveOrganization('Peter'));
console.log(organization.status());

