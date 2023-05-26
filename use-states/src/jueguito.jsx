import { useState } from 'react';
import './jueguito.css'

function Jueguito() {
    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");

    let numero;
    let objetos = ["Piedra", "Papel", "Tijera"]
    let ganador;


    function resultado1() {
        setJugador1("Piedra")
        numero = Math.floor(Math.random() * 3)
        setJugador2(objetos[numero])
        console.log(jugador2)
    }

    function resultado2() {
        setJugador1("Papel")
        numero = Math.floor(Math.random() * 3)
        setJugador2(objetos[numero])
        console.log(jugador2)
    }

    function resultado3() {
        setJugador1("Tijera")
        numero = Math.floor(Math.random() * 3)
        setJugador2(objetos[numero])
        console.log(jugador2)
    }

    if (jugador1 === "Piedra" && jugador2 === "Papel") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }else if (jugador1 === "Piedra" && jugador2 === "Tijera") {
        ganador = "Ganaste mamagvo"
        
    }if (jugador2 === "Piedra" && jugador1 === "Papel") {
        ganador = "Ganaste mamagvo"
        
    }else if (jugador2 === "Piedra" && jugador1 === "Tijera") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }else if (jugador1 === "Papel" && jugador2 === "Piedra") {
        ganador = "Ganaste mamagvo"
        
    }else if (jugador1 === "Papel" && jugador2 === "Tijera") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }if (jugador2 === "Papel" && jugador1 === "Piedra") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }else if (jugador2 === "Papel" && jugador1 === "Tijera") {
        ganador = "Ganaste mamagvo"
        
    }else if (jugador1 === "Tijera" && jugador2 === "Piedra") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }else if (jugador1 === "Tijera" && jugador2 === "Papel") {
        ganador = "Ganaste mamagvo"
        
    }if (jugador2 === "Tijera" && jugador1 === "Piedra") {
        ganador = "Ganaste mamagvo"
        
    }else if (jugador2 === "Tijera" && jugador1 === "Papel") {
        ganador = "Perdiste juaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        
    }else if (jugador1 === jugador2) {
        ganador = "Empataste, manco."
    }

    return (
        <div>

            <div className='juego'>

            <div>

            <h1>Piedra, papel o tijeras</h1>

            <p className='lolo'>Let`s Gooooo</p>

            </div>
            
            </div> 

            <br />

            <div className='juego'>

            <div className='d-flex gap-3'>
                
            <button onClick={resultado1}>Piedra</button>

            <button onClick={resultado2}>Papel</button>

            <button onClick={resultado3}>Tijera</button>
            
            </div>

            </div>  

            <br />

            <div className='juego'>

            <div>
                
            <p>Tu sacaste {jugador1}</p>

            <p>Tu oponente saco {jugador2}</p>

            <p>Gano: {ganador}</p></div>
            
            </div>
            
            </div> 
            
    )
}

export default Jueguito