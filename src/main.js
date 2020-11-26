export default class App {
    convertir(pesos) {
        if (pesos < 2000) {
            return pesos*20.5;
        }
        else if (pesos >= 2000) {
            return pesos*22.7;
        }
    }

}

let app = new App();
