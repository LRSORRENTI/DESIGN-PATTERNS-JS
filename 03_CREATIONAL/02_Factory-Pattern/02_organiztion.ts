// FACTORY DESIGN PATTERN EXAMPLE

// first let's make an interface for employee

// And all classes will receive this interface


// We define an enum, or set of named constants, 
// with values for each department
enum Department {
    Engineering = 'engineering',
    Marketing = 'marketing',
    Accounting = 'accounting'
}

// We'll define our employee interface
// where all classes will implement this
interface iEmployee {
// We'll have a few methods:
getDepartment(): Department
// the getDepartment will return a method 
// inside of the above enum
getSalary(): number
// the above will return a number for an employees
// salary
 getName(): string
// above will return the employee's full name
}

class MarketingManager implements iEmployee{
    getDepartment(): Department {
        return Department.Marketing;
    }
    getSalary(): number {
        return 70000;
    }
    getName(): string {
        return "Marketer1"
    }
}

class AccountingManager implements iEmployee{
    getDepartment(): Department {
        return Department.Accounting;
    }
    getSalary(): number {
       return 70000
    }
    getName(): string {
        return "Accountant1"
    }
}



class JuniorDeveloper implements iEmployee{
    getDepartment(): Department {
        return Department.Engineering;
    }
    getSalary(): number {
        return 30000
    }
    getName(): string {
        return "JuniorDev1"
    }
}

class OrganizationFactory {
    private OrganizationName: string;
    private employees: iEmployee[] = [];
    constructor(name: string){
      this.OrganizationName = name;

    }
    // now we can create a getter function for it
    public get name() : string {
        return this.OrganizationName
    }
    addEmployees(employeeList: iEmployee[]){
        this.employees = this.employees.concat(employeeList)
    }
    findEmployee(name: string){
         return (this.employees.filter(emp => emp.getName() === name)[0].getName()
         )
    // So this is our factory, let's use it to create 
    // a new one below:
}
}

const HBCFactory = new OrganizationFactory("HBC");
console.log(HBCFactory)
HBCFactory.addEmployees([new MarketingManager(),
                         new AccountingManager(),
                         new JuniorDeveloper()])
console.log(HBCFactory)

/*
ts-node 02_organiztion.ts 
OrganizationFactory { employees: [], OrganizationName: 'HBC' }
OrganizationFactory {
  employees: [
    MarketingManager { name: 'Marketer1' },
    AccountingManager { name: 'Accountant1' },        
    JuniorDeveloper { name: 'JuniorDev1' }
  ],
  OrganizationName: 'HBC'
}
*/
// console.log(HBCFactory.employees)
// But if we look at console.log(HBCFactory.employees)
// we see the error:

// Property 'employees' is private and only accessible within class 'OrganizationFactory'.ts(2341)
//Property 'employees' is private and only accessible within class 'OrganizationFactory'.

// So above we'll add a method inside OrganizationFactory
// findEmployee(name: string){
//     return this.employees.filter(emp => emp.name === name);

// then console.log

console.log(HBCFactory.findEmployee("JuniorDev1"))