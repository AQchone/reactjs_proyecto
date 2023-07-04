import React, { useEffect, useRef } from 'react';
import './gam_style.css';
import { Pong } from "./gam_script.js"; // Modifica esta línea


function Gam() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pongGame = Pong.initialize(canvas);

    // Aquí puedes realizar cualquier otra configuración o interacción con el juego

    // Ejemplo: Iniciar el juego
    if (pongGame.running === false) {
      pongGame.running = true;
      window.requestAnimationFrame(pongGame.loop);
    }
  }, []);

  return (
    <div className='Gam_body'>
      <h1>Pong Game</h1>
      <p>Control the left player by using up and down arrow keys</p>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Gam;