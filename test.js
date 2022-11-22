let students = [{
    age: 29,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
}];

let femaleStudents = students.filter(obj => obj.gender === "female");
let ageFemales = femaleStudents.map(function(obj) {
  return obj.age;
});
let femaleAgeAverage = ageFemales.reduce((a, b) => a + b, 0) / ageFemales.length;

console.log("\nLa media de edad de las chicas de la clase es: ", femaleAgeAverage);