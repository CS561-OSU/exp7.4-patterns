// Define the Strategy interface
class Strategy {
  execute(a, b) {
      throw new Error('Strategy#execute needs to be overridden');
  }
}

// Define Concrete Strategies
class AddStrategy extends Strategy {
  execute(a, b) {
      return a + b;
  }
}

class SubtractStrategy extends Strategy {
  execute(a, b) {
      return a - b;
  }
}

class MultiplyStrategy extends Strategy {
  execute(a, b) {
      return a * b;
  }
}

// Define the Context class
class Context {
  constructor(strategy) {
      this.strategy = strategy;
  }

  setStrategy(strategy) {
      this.strategy = strategy;
  }

  executeStrategy(a, b) {
      return this.strategy.execute(a, b);
  }
}

// Client code
const context = new Context(new AddStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 8

context.setStrategy(new SubtractStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 2

context.setStrategy(new MultiplyStrategy());
console.log(context.executeStrategy(5, 3)); // Output: 15