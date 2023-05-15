// FACTORY DESIGN PATTERN EXAMPLE

// first let's make an interface for employee

// And all classes will receive this interface


enum Department {
    Engineering = 'engineering',
    Marketing = 'marketing',
    Accounting = 'accounting'
}

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