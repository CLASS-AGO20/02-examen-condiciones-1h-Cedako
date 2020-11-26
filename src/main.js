export default class App {
    convertir(pesos) {
        if (pesos < 2000) {
            return pesos*20.5;
        }
        else if (pesos >= 2000) {
            return pesos*22.7;
        }
    }

    costoRenta(kilometros) {
        if (kilometros<50) {
            return kilometros*3;
        }
        else if (kilometros>=50 && kilometros<100) {
            return kilometros*5;
        }
        else if (kilometros>=100 && kilometros<200) {
            return kilometros*6;
        }
        else if (kilometros>=200) {
            return kilometros*6.5;
        }
    }

}

let app = new App();

console.log(app.convertir(1999));
console.log(app.convertir(2000));
console.log(app.costoRenta(50));
console.log(app.costoRenta(60));
console.log(app.costoRenta(101));
console.log(app.costoRenta(300));