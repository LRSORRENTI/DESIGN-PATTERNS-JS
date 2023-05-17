/* 
========================
ABSTRACT FACTORY PATTERN
========================




*/
/*
To turn our existing factory design 
pattern example into an abstract
 factory design pattern, you would need
  to introduce an abstract factory class 
  and abstract employee classes.
  
 

Abstract Employee Class: Create an abstract base 
class called AbstractEmployee
 that defines the common methods and 
 properties for all employee types. This 
 class will serve as the foundation for
  concrete employee classes.

  */

abstract class AbstractEmployee implements iEmployee {
  abstract getDepartment(): Department;
  abstract getSalary(): number;
  abstract getName(): string;
}
/*
Concrete Employee Classes: Modify the 
existing employee classes (MarketingManager,
     AccountingManager, and JuniorDeveloper)
      to extend the AbstractEmployee 
      class and implement the required methods.
      */

class MarketingManager extends AbstractEmployee {
  getDepartment(): Department {
    return Department.Marketing;
  }
  getSalary(): number {
    return 70000;
  }
  getName(): string {
    return "Marketer1";
  }
}

class AccountingManager extends AbstractEmployee {
  getDepartment(): Department {
    return Department.Accounting;
  }
  getSalary(): number {
    return 70000;
  }
  getName(): string {
    return "Accountant1";
  }
}

class JuniorDeveloper extends AbstractEmployee {
  getDepartment(): Department {
    return Department.Engineering;
  }
  getSalary(): number {
    return 30000;
  }
  getName(): string {
    return "JuniorDev1";
  }
}

// Abstract Factory Class: 
// Create an abstract factory class
//  called AbstractFactory that defines
//   the factory methods for creating
//    different types of employees. 
//    This class will be responsible 
//    for creating concrete employee instances.

abstract class AbstractFactory {
  abstract createMarketingManager(): AbstractEmployee;
  abstract createAccountingManager(): AbstractEmployee;
  abstract createJuniorDeveloper(): AbstractEmployee;
}
// Concrete Factory Class:
//  Modify the OrganizationFactory 
//  class to extend the AbstractFactory 
//  class and implement the factory methods 
//  to create specific employee instances.

class OrganizationFactory extends AbstractFactory {
  private OrganizationName: string;
  private employees: iEmployee[] = [];
  
  constructor(name: string) {
    super();
    this.OrganizationName = name;
  }

  // Rest of the class implementation...

  createMarketingManager(): AbstractEmployee {
    return new MarketingManager();
  }

  createAccountingManager(): AbstractEmployee {
    return new AccountingManager();
  }

  createJuniorDeveloper(): AbstractEmployee {
    return new JuniorDeveloper();
  }
}

/*
With these modifications, we've transformed 
the original factory design pattern into
 an abstract factory design pattern. 
 
 The AbstractEmployee class serves as the
  base for concrete employee classes,
   and the AbstractFactory class defines
    the factory methods for creating 
    different types of employees.
    
    The OrganizationFactory class 
    implements the concrete factory 
    and provides the necessary implementations 
    for creating specific employee instances.

This abstraction allows you to 
introduce new concrete employee
 classes or even create different 
 concrete factory classes for 
 alternative implementations while 
 maintaining the common interface 
 provided by the abstract classes.

 */

 export = {
    AbstractEmployee,
    MarketingManager,
    AccountingManager,
    JuniorDeveloper,
    AbstractFactory,
    OrganizationFactory
 }