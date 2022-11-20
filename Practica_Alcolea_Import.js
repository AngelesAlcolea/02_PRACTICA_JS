//Apartado de imports
import readline from 'readline';
import {executeOption, showMenu} from './functions.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Pedir número
function getOptionFromConsole() {
    showMenu();
    const promise = new Promise((resolve, reject) => {
        rl.question('\Elije una opción: ', (num) => {
        rl.pause();
        resolve(num);
        })
    });
  return promise;
};

//Devolver opción
let opt = await getOptionFromConsole();
executeOption(opt);

while (opt >= 1 && opt <= 15) {
    opt = await getOptionFromConsole();
    if (opt >=1 && opt<=15) {
        executeOption(opt);
    } else {
        break
    }
};

rl.close();