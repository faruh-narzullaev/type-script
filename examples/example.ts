type MyCustomArray = Array<string | number | boolean>;
type MyCustomNumber = number;

var age: MyCustomNumber = 28;
var arr: MyCustomArray  = ["string", 5, false];

// синонимы типов

// function readonly<T extends Function>(Target: T): T {
//     let newConstructor = function() {
//         Target.apply(this);
//         Object.freeze(this);
//     };

//     newConstructor.prototype = Object.create(Target.prototype);
//     newConstructor.prototype.constructor = Target;

//     return <any>newConstructor;
// }

// @readonly
// class Person {
//     name: string;
//     isAdmin: boolean;

//     constructor(name: string, admin: boolean) {
//         this.name = name;
//         this.isAdmin = admin;
//     }
// }