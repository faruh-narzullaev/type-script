enum Color {Red, Green, White};

interface Car {
	engine: string;
	color: Color;
	mileage?: number;
}

function carAttributes(car: Car): void {
	for (let attribute in car) {
		console.log(car[attribute]);
	}
}

var HondaAccord = {engine: "v6", color: Color.Green};
carAttributes(HondaAccord);
