var Color;
(function (Color) {
    Color[Color["Red"]   = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));

function carAttributes(car) {
    for (var attribute in car) {
        console.log(car[attribute]);
    }
}
var HondaAccord = { engine: "v6", color: Color.Green };
carAttributes(HondaAccord);

