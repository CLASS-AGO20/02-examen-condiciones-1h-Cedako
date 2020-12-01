export default class App {
    convertir(pesos) {
        if (pesos < 2000) {
            return pesos/20.5;
        }
        else if (pesos >= 2000) {
            return pesos/22.7;
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
    
    puedeCircular(dia, terminacion) {
        switch (dia) {
            case 1:
                if (terminacion===0){
                    return true;
                }
                else if (terminacion != 1 && terminacion != 2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 2:
                if (terminacion===1){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=2) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 3:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 4:
                if (terminacion===2){
                    return true;
                }
                else if (terminacion!=0 && terminacion!=1) {
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 5:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 6:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
            case 7:
                if (terminacion!=0 && terminacion!=1 && terminacion!=2){
                    return true;
                }
                else {
                    return false;
                }
                break;
                default:
                    return false;
        }
    }

}

let app = new App();

console.log(app.convertir(1999));
console.log(app.convertir(2000));
console.log(app.costoRenta(49));
console.log(app.costoRenta(60));
console.log(app.costoRenta(101));
console.log(app.costoRenta(300));
console.log(app.puedeCircular(1,0));
console.log(app.puedeCircular(1,2));
console.log(app.puedeCircular(1,3));
console.log(app.puedeCircular(2,1));
console.log(app.puedeCircular(7,1));