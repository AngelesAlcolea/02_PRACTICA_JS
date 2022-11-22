let students = [{
    age: 32,
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

let ageIntervalStudents = students.filter(obj => obj.age >= 20 && obj.age <= 25);

let ageIntervalNames = ageIntervalStudents.map(function(obj) {
  return obj.name;
});

console.log("\nLos alumnos/as que tienen entre 20 y 25 años se llaman: ", ageIntervalNames);