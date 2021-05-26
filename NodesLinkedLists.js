const prompt = require("prompt-sync")({ sigint: true });

class Nodes {
  constructor(age, highlight, nextNode = null) {
    this.age = age;
    this.highlight = highlight;
    this.nextNode = nextNode;
  }
}

class LinkedLists {
  constructor(age, highlight) {
    this.headNode = new Nodes(age, highlight);
  }
  insertFirst = (age, highlight) => {
    const node = new Nodes(age, highlight, this.headNode);
    this.headNode = node;
  };

  getLinkedList = () => {
    let current = this.headNode;

    while (current) {
      console.log(`year : ${current.age}, highlight : ${current.highlight}`);
      current = current.nextNode;
    }
  };

  insertHighlight = (age) => {
    let current = this.headNode;

    while (current.age < age) {
      let currentAge = current.age + 1;
      if (current.nextNode && current.nextNode.age === currentAge) {
        current = current.nextNode;
      } else {
        let highlight = prompt(`enter highlight for year : ${currentAge}`);
        let newNode = new Nodes(currentAge, highlight, current.nextNode);
        current.nextNode = newNode;
        current = newNode;
      }
    }
  };
}

const ageList = new LinkedLists(7, "i was seven");
ageList.insertFirst(3, "i started walking");
ageList.insertFirst(1, "i was born");
let age = prompt("age :");
ageList.insertHighlight(age);
ageList.getLinkedList();

// console.log(node3);
