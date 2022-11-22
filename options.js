import { randomInt } from 'crypto';
import { students } from "./database.js";

export function option1() {
    console.log("\nTabla de estudiantes:");
    console.table(students);
};

export function option2() {
    console.log("\nNúmero de estudiantes: " + students.length);
};

export function option3() {
    let names = students.map(function(obj) {
        return obj.name;
    });
    console.log("\nLos nombres de los alumnos son: ", names);
};

export function option4() {
    students.pop();
    console.log("\nEl último alumno ha sido eliminado. Si desea ver la lista de alumnos restantes elija la opción 1.");
};

export function option5() {
    students.splice(randomInt(0,students.length), 1);
    console.log("\nUn alumno ha sido eliminado aleatoriamente. Si desea ver la lista de alumnos restantes elija la opción 1.");
};

export function option6() {
    let femaleStudents = students.filter(obj => obj.gender === "female");
    console.log("\nLas alumnas son: ");
    console.table(femaleStudents);
};

export function option7() {
    let femaleStudents = students.filter(obj => obj.gender === "female");
    let maleStudents = students.filter(obj => obj.gender === "male");
    console.log("\nEl número de chicos es: " + maleStudents.length);
    console.log("El número de chicas es: " + femaleStudents.length);
};

export function option8() {
    let testFemale = false;
    let maleStudents = students.filter(obj => obj.gender === "male");
    if (maleStudents.length == 0) {
        testFemale = true;
    };
    console.log("\n¿Todos los alumnos de la clase son chicas?: " + testFemale);
};

export function option9() {
    let ageIntervalStudents = students.filter(obj => obj.age >= 20 && obj.age <= 25);
    let ageIntervalNames = ageIntervalStudents.map(function(obj) {
        return obj.name;
    });
    if (ageIntervalNames.length == 0) {
        console.log("\nNo hay alumnos/as que tengan entre 20 y 25 años.");
    } else {
        console.log("\nLos alumnos/as que tienen entre 20 y 25 años se llaman: ", ageIntervalNames);
    };
};

export function option10() {
    
};

export function option11() {
    Array.prototype.min = function() {
        return Math.min.apply(null, this);
    };
    let ages = students.map(function(obj) {
        return obj.age;
    });
    let minAgeStudents = students.filter(obj => obj.age == ages.min());
    let minAgeName = minAgeStudents.map(function(obj) {
        return obj.name;
    });
    if (minAgeName.length > 1) {
        console.log("\nLas personas más jovenes de la clase son: ", minAgeName);
    } else {
        console.log("\nLa persona más joven de la clase es: ", minAgeName);
    };
};

export function option12() {
    let ages = students.map(function(obj) {
        return obj.age;
    });
    let ageAverage = ages.reduce((a, b) => a + b, 0) / ages.length;
    console.log("\nLa media de edad de la clase es: ", ageAverage);
};

export function option13() {
    let femaleStudents = students.filter(obj => obj.gender === "female");
    let ageFemales = femaleStudents.map(function(obj) {
        return obj.age;
    });
    let femaleAgeAverage = ageFemales.reduce((a, b) => a + b, 0) / ageFemales.length;
    console.log("\nLa media de edad de las chicas de la clase es: ", femaleAgeAverage);
};

export function option14() {
    
};

export function option15() {
    let names = students.map(function(obj) {
        return obj.name;
    });
    console.log("\nLa lista de alumnos en orden alfabético es: ", names.sort());
};