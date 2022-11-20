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

let names = students.map(function(obj) {
  return obj.name;
});

console.log(names);