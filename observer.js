// Define the Subject class
class Subject {
  constructor() {
      this.observers = [];
  }

  addObserver(observer) {
      this.observers.push(observer);
  }

  removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(message) {
      this.observers.forEach(observer => observer.update(message));
  }
}

// Define the Observer class
class Observer {
  constructor(name) {
      this.name = name;
  }

  update(message) {
      console.log(`${this.name} received message: ${message}`);
  }
}

// Client code
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello Observers!'); // Both observers will receive this message

subject.removeObserver(observer1);

subject.notifyObservers('Observer 1 has been removed'); // Only Observer 2 will receive this message