type User = {
  

}


// Single Responsibility Principle (SRP)
class UserRepository {
    constructor(private readonly db: Database) {}
  
    async getUserById(id: string): Promise<User> {
      // Implementation to retrieve user from database by ID
      return id;
    }
  
    async getUserByEmail(email: string): Promise<User> {
      // Implementation to retrieve user from database by email
      return email
    }
  
    async saveUser(user: User): Promise<void> {
      // Implementation to save user to database
    }
  }
  
  // Open-Closed Principle (OCP)
  interface IUserService {
    getUser(id: string): Promise<User>;
    saveUser(user: User): Promise<void>;
  }
  
  class UserService implements IUserService {
    constructor(private readonly userRepository: UserRepository) {}
  
    async getUser(id: string): Promise<User> {
      return this.userRepository.getUserById(id);
    }
  
    async saveUser(user: User): Promise<void> {
      await this.userRepository.saveUser(user);
    }
  }
  
interface IUserRepository {
    
}

  // Liskov Substitution Principle (LSP)
  class MockUserRepository implements IUserRepository {
    async getUser(id: string): Promise<User> {
      // Implementation to return mock user
      return id;
    }
  
    async saveUser(user: User): Promise<void> {
      // Implementation to do nothing
    }
  }
  
  // Interface Segregation Principle (ISP)
  interface IUserAuthenticationService {
    authenticateUser(email: string, password: string): Promise<User>;
  }
  
  class UserAuthenticationService implements IUserAuthenticationService {
    constructor(private readonly userRepository: UserRepository) {}
  
    async authenticateUser(email: string, password: string): Promise<User> {
      // Implementation to authenticate user
      return email
    }
  }
  
  // Dependency Inversion Principle (DIP)
  interface IDatabase {
    executeQuery(query: string): Promise<any>;
  }
  
  class Database implements IDatabase {
    async executeQuery(query: string): Promise<any> {
      // Implementation to execute database query
    }
  }
  

