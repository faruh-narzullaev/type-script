// Enums begin numbering their members starting at 0
enum Color { Red = 1, Green = 4, Blue = 15 };

var color: Color = Color.Green;
console.log(color); // 4

var colorName: string = Color[15];
console.log(colorName); // Blue








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