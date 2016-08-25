class Person {
  constructor(name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}


let person = new Person('Vlad');

console.log(person.getName());
person.setName('Tolya');
console.log(person.getName());


let apples = 5; // (*)
if (true) {
  let apples = 10;
  alert(apples); // 10 (внутри блока)
}
alert(apples); // 5 (снаружи блока значение не изменилось)то же самое)