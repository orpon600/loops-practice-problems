//75.25, 65, 80, 35.45, 99.50
//Mathematics, Biology, Chemistry, Physics, and Bangla
var mathMarks = 75.25;
var BiologyMarks = 65;
var ChemistryMarks = 80;
var PhysicsMarks = 35.45;
var BanglaMarks = 99.5;
var totalMarks =
  mathMarks + BiologyMarks + ChemistryMarks + PhysicsMarks + BanglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);
