// Define the Target interface that the client expects.
//Note: This is an abstract interface. it is meant to be overridden.
class Target {
  request() {
      throw new Error('This method should be overridden!');
  }
}

//Define the Adaptee class. This is NOT what the client expects.
//It needs to be adapted to the Target interface so that it can
//be seamlessly used by the client.
class Adaptee {
  specificRequest() {
      return 'Adaptee specific request';
  }
}

// Define the Adapter class that adapts the Adaptee to the Target interface
class Adapter extends Target {
  constructor(adaptee) {
      super();
      this.adaptee = adaptee;
  }

  request() {
      return this.adaptee.specificRequest();
  }
}

// Client code
function clientCode(target) {
  console.log(target.request());
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter); // Output: Adaptee specific request