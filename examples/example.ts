function ClassDecorator(target: Function) { // The class the decorator is declared on
	console.log('ClassDecorator called on: ', target);
}

@ClassDecorator
class ClassDecoratorExample {

}









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