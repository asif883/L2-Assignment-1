function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatString("HELLO", false));
// console.log(formatString("hello", true));





function filterByRating(items: { title: string; rating: number }[]): 
  { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}


const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
]
  
// console.log(filterByRating(books));







function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c"]));
  // Output: ["a", "b", "c"]
  
console.log(concatenateArrays([1, 2], [3, 4], [5]));
  // Output: [1, 2, 3, 4, 5]
    
 
  



class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
}
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year); 
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
}
  

const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel());  // Output: "Model: Corolla"
