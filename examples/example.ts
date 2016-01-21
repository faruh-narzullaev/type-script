var average: number = calculateAverage([
	{ name: "Peter", age: 65 },
	{ name: "John", age: 32 }
]);

interface Human {
	name: string;
	age: number;
}

function calculateAverage<T extends Human>(eployers: T[]): number {
	var averageAge: number;
	var average: T[] = eployers.filter(c => c.age == averageAge);
	return 32; // dummy average
}

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