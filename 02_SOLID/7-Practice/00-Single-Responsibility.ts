// Practicing single responsibility

class storeUserData  {
    // This class has one responsibility, store 
    // user's data
    name: string;
    age: number;
  store: () => {
      // get users name and age, and 
      // store data
  }
}