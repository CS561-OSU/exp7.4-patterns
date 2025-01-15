// Define a Product class with a display method
class Product {
  constructor(name) {
      this.name = name;
  }

  display() {
      console.log(`This is a ${this.name}`);
  }
}

// Define Concrete Products
class ProductA extends Product {
  constructor() {
      super('Product A');
  }
}

class ProductB extends Product {
  constructor() {
      super('Product B');
  }
}

// Define the Factory Method
class Factory {
  createProduct(type) {
      switch (type) {
          case 'A':
              return new ProductA();
          case 'B':
              return new ProductB();
          default:
              throw new Error('Unknown product type');
      }
  }
}

// Client code
function displayProduct(factory, type) {
  const product = factory.createProduct(type);
  product.display();
}

const factory = new Factory();

displayProduct(factory, 'A'); // Output: This is a Product A
displayProduct(factory, 'B'); // Output: This is a Product B