document.addEventListener("DOMContentLoaded", function (event) {

    function obtenerNumeroAlAzar(min, max) {
        const mayorQueElMinimo = Math.ceil(min);
        const menorQueElMaximo = Math.floor(max);
        return Math.floor(Math.random() * (menorQueElMaximo - mayorQueElMinimo + 1) + mayorQueElMinimo); 
    }

    const cuantasVecesQuiereJugar = () => {
        var cuantasVecesJugaras = prompt("ingresa cuantas veces quieres jugar");
        return cuantasVecesJugaras;
    }

    const opcionJugador = () => {
        var jugada = prompt("ingresa tu opción, piedra, papel o tijeras");
        jugada = jugada.toLowerCase();
        while (jugada !="piedra" && jugada !="papel" && jugada !="tijeras"){
            jugada= prompt("Si quieres jugar deber escribir piedra, papel o tijeras");
            jugada = jugada.toLowerCase();
        }
        return jugada;
    }

    const opcionMaquina = () => {
        var jugadaMaquina;
        let opcionNumericaMaquina = obtenerNumeroAlAzar(1,3);
        switch (opcionNumericaMaquina){
            case 1 :
                jugadaMaquina = "piedra";
                break;
            case 2:
                jugadaMaquina = "papel";
                break;
            case 3:
                jugadaMaquina = "tijeras";
                break;
        }
        return jugadaMaquina;
    }

    const comparacionJugadorMaquina = (jugador, maquina) => {
        switch (maquina){
            case "piedra":
                if (jugador == maquina){
                    alert("Tu con la maquina han empatado");
                } else if(jugador == "tijeras"){
                    alert("Perdiste este duelo contra la maquina");
                } else if(jugador == "papel"){
                    alert("Ganaste este duelo contra la maquina");
                }
                break;
            case "papel":
                if (jugador == maquina){
                    alert("Tu con la maquina han empatado");
                } else if(jugador == "piedra"){
                    alert("Perdiste este duelo contra la maquina");
                } else if(jugador == "tijeras"){
                    alert("Ganaste este duelo contra la maquina");
                }
                break;
            case "tijeras":
                if (jugador == maquina){
                    alert("Tu con la maquina han empatado");
                } else if(jugador == "papel"){
                    alert("Perdiste este duelo contra la maquina");
                } else if(jugador == "piedra"){
                    alert("Ganaste este duelo contra la maquina");
                }
                break;
        }
    }

    const cicloDeJugadas = (a) => {
        for (let i = 0; i < a; i++){
            var opcionjugadoJugando = opcionJugador();
            var opcionMaquinaJugando = opcionMaquina();
            comparacionJugadorMaquina(opcionjugadoJugando, opcionMaquinaJugando);
        }
    }

    const cachipunContraLaMaquina = () => {
        const numeroDePartidas = cuantasVecesQuiereJugar();
        cicloDeJugadas(numeroDePartidas);
    }

    cachipunContraLaMaquina();
});
