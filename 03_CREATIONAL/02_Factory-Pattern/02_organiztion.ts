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
readonly name: string
// above will return the employee's full name
}

class MarketingManager implements iEmployee{
    getDepartment(): Department {
        return Department.Marketing;
    }
    getSalary(): number {
        return 50000;
    }
    readonly name: string = "Bob Roberts"
}