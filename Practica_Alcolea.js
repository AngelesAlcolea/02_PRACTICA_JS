//Apartado de imports
import { randomInt } from 'crypto';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Base de datos de alumnos
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

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

//Definición de variables
const availableGenders = ['male', 'female'];
const availableMaleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'alicia', 'isabel', 'virginia'];
let names = [];
let femaleStudents = students.filter(obj => obj.gender === "female");
let maleStudents = students.filter(obj => obj.gender === "male");
let testFemale = false;
let ageIntervalStudents = students.filter(obj => obj.age >= 20 && obj.age <= 25);
let ageIntervalNames = ageIntervalStudents.map(function(obj) {
  return obj.name;
});
let ages = students.map(function(obj) {
  return obj.age;
});
let minAgeStudents = students.filter(obj => obj.age == ages.min());
let minAgeName = minAgeStudents.map(function(obj) {
  return obj.name;
});
let ageAverage = ages.reduce((a, b) => a + b, 0) / ages.length;
let ageFemales = femaleStudents.map(function(obj) {
  return obj.age;
});
let femaleAgeAverage = ageFemales.reduce((a, b) => a + b, 0) / ageFemales.length;
  
//Menú de opciones
function showMenu() {
  console.log("")
  console.log("1- Mostrar en formato de tabla todos los alumnos.")
  console.log("2- Mostrar la cantidad de alumnos que hay en clase.")
  console.log("3- Mostrar todos los nombres de los alumnos.")
  console.log("4- Eliminar el último alumno de la clase.")
  console.log("5- Eliminar un alumno aleatoriamente de la clase.")
  console.log("6- Mostrar todos los datos de los alumnos que son chicas.")
  console.log("7- Mostrar el número de chicos y chicas que hay en la clase.")
  console.log("8- Mostrar true o false si todos los alumnos de la clase son chicas.")
  console.log("9- Mostrar los nombres de los alumnos que tengan entre 20 y 25 años.")
  console.log("10- Añadir un alumno nuevo con los siguientes datos:")
  console.log("\tnombre aleatorio.")
  console.log("\tedad aleatoria entre 20 y 50 años.")
  console.log("\tgénero aleatorio.")
  console.log("\tlistado de calificaciones vacío.")
  console.log("11- Mostrar el nombre de la persona más joven de la clase.")
  console.log("12- Mostrar la edad media de todos los alumnos de la clase.")
  console.log("13- Mostrar la edad media de las chicas de la clase.")
  console.log("14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.")
  console.log("15- Ordenar el array de alumnos alfabéticamente según su nombre.)")
  console.log("")
};

//Selector de opciones
function executeOption(opt) {
  switch (opt) {
    case "1":
      console.table(students)
      break;
    case "2":
      console.log("\nNúmero de estudiantes: " + students.length);
      break;
    case "3":
      names = students.map(function(obj) {
        return obj.name;
      });
      if (names.length == 0) {
        console.log("\nNo hay alumnos en esta clase.");
      } else {
        console.log("\nLos nombres de los alumnos son: ", names);
      };
      break;
    case "4":
      students.pop()
      console.log("\nEl último alumno ha sido eliminado. Si desea ver la lista de alumnos restantes elija la opción 1.")
      break;
    case "5":
      students.splice(randomInt(0,students.length), 1);
      console.log("\nUn alumno ha sido eliminado aleatoriamente. Si desea ver la lista de alumnos restantes elija la opción 1.")
      break;
    case "6":
      femaleStudents = students.filter(obj => obj.gender === "female");
      console.log("\nLas alumnas son: ");
      console.table(femaleStudents);
      break;
    case "7":
      femaleStudents = students.filter(obj => obj.gender === "female");
      maleStudents = students.filter(obj => obj.gender === "male");
      console.log("\nEl número de chicos es: " + maleStudents.length);
      console.log("El número de chicas es: " + femaleStudents.length);
      break;
    case "8":
      maleStudents = students.filter(obj => obj.gender === "male");
      if (maleStudents.length == 0) {
        testFemale = true;
      };
      console.log("\n¿Todos los alumnos de la clase son chicas?: " + testFemale);
      break;
    case "9":
      ageIntervalStudents = students.filter(obj => obj.age >= 20 && obj.age <= 25);
      ageIntervalNames = ageIntervalStudents.map(function(obj) {
        return obj.name;
      });
      if (ageIntervalNames.length == 0) {
        console.log("\nNo hay alumnos/as que tengan entre 20 y 25 años.");
      } else {
        console.log("\nLos alumnos/as que tienen entre 20 y 25 años se llaman: ", ageIntervalNames);
      };
      break;
    case "10":
      const randAge = randomInt(20, 51);
      const randGender = availableGenders[randomInt(0, availableGenders.length)];
      let randName = "";
      if (randGender == "male") {
        randName = availableMaleNames[randomInt(0, availableMaleNames.length)]
      } else {
        randName = availableFemaleNames[randomInt(0, availableFemaleNames.length)]
      };
      const randScores = [];
      const newAlumn = {
        age: randAge,
        examScores: randScores,
        gender: randGender,
        name: randName
      };
      students.push(newAlumn);
      console.log("\nEl nuevo alumno/a es: ");
      console.table(newAlumn);
      break;
    case "11":
      ages = students.map(function(obj) {
        return obj.age;
      });
      minAgeStudents = students.filter(obj => obj.age == ages.min());
      minAgeName = minAgeStudents.map(function(obj) {
        return obj.name;
      });
      if (minAgeName.length > 1) {
        console.log("\nLas personas más jovenes de la clase son: ", minAgeName);
      } else {
        console.log("\nLa persona más joven de la clase es: ", minAgeName);
      };
      break;
    case "12":
      ages = students.map(function(obj) {
        return obj.age;
      });
      ageAverage = ages.reduce((a, b) => a + b, 0) / ages.length;
      console.log("\nLa media de edad de la clase es: ", ageAverage);
      break;
    case "13":
      femaleStudents = students.filter(obj => obj.gender === "female");
      ageFemales = femaleStudents.map(function(obj) {
        return obj.age;
      });
      femaleAgeAverage = ageFemales.reduce((a, b) => a + b, 0) / ageFemales.length;
      console.log("\nLa media de edad de las chicas de la clase es: ", femaleAgeAverage);
      break;
    case "14":
      students.map(function (obj) {
        obj.examScores.push(randomInt(0, 11));
      });
      console.log("\nLas nuevas notas son:");
      console.table(students);
      break;
    case "15":
      names = students.map(function(obj) {
        return obj.name;
      });
      console.log("\nLa lista de alumnos en orden alfabético es: ", names.sort());
      break;
    default:
      break;
  }
};

//Pedir número
function getOptionFromConsole() {
  showMenu();
  const promise = new Promise((resolve, reject) => {
    rl.question('\Elije una opción: ', (num) => {
    rl.pause();
    resolve(num)
  })
})

  return promise;
};

//Pedir opción y devolver resultado
let opt = await getOptionFromConsole();
executeOption(opt);

//Volver a pedir opción o terminar
while (opt >= 1 && opt <= 15) {
  opt = await getOptionFromConsole();
  if (opt >=1 && opt<=15) {
    executeOption(opt);
  } else {
    break
  }
};

rl.close();