const readlineSync = require('readline-sync');

const adivina = () => {
    console.log ("Bienvenido al Juego, debes adivinar un numero del 1 al 10");
    console.log ("Pensando un numero...");
    let numeroAleatorio = Math.floor(Math.random()*10) ;

    console.log("Numero Obtenido");
    console.log("En que Numero estoy pensando?");
    let num = 0;
    do{

        console.log ("El Numero aleatorio es ", numeroAleatorio);
       num = readlineSync.question("Ingresa un numero ");
        
       if(num == numeroAleatorio){
        console.log ("Acetaste, Felicitaciones");
       }else{
        console.log ("Incorrecto, Intenta de nuevo");
       }


    }while(numeroAleatorio != num);

    console.log("Juego terminado");
}

module.exports={adivina};