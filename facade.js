// Subsystem classes
class CPU {
  freeze() {
      console.log('Freezing CPU...');
  }
  jump(position) {
      console.log(`Jumping to position ${position}...`);
  }
  execute() {
      console.log('Executing instructions...');
  }
}

class Memory {
  load(position, data) {
      console.log(`Loading data '${data}' at position ${position}...`);
  }
}

class HardDrive {
  read(lba, size) {
      return `Data from sector ${lba} of size ${size}`;
  }
}

// Facade class
class ComputerFacade {
  constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
  }

  start() {
      this.cpu.freeze();
      this.memory.load(0, this.hardDrive.read(100, 1024));
      this.cpu.jump(0);
      this.cpu.execute();
  }
}

// Client code
const computer = new ComputerFacade();
computer.start();
// Output:
// Freezing CPU...
// Loading data 'Data from sector 100 of size 1024' at position 0...
// Jumping to position 0...
// Executing instructions...