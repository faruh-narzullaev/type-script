// Enums begin numbering their members starting at 0
enum Color {Red, Green, Blue};
var color: Color = Color.Green;

// Manually set all the values in the enum
enum Size {Small = 1, Medium = 2, Big = 4};
var size: Size = Size.Medium;

// Go from a numeric value to the name of that value in the enum
enum Font {Arial = 1, Verdana, Sans};
var fontName: string = Font[2]; // Verdana

