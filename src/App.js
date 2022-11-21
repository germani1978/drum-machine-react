import React, { useState } from 'react';

import './App.css';
import { actionBank, actionSetDisplay, actionOn, actionSetVolumen } from './reducer/radioReducer';
import { useDispatch, useSelector } from "react-redux";
import { click } from '@testing-library/user-event/dist/click';



const App = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const InputVolumen = (props) => {

    click = e => dispatch(actionSetVolumen(e.target.value));

    return (
      <div className='volumen centrar'>
        <input type={'range'} value={state.volumen} onChange={click} />
      </div>
    )
  }

  const Display = () => {

    return (
      <div id="display" className='display centrar'>
        {state.display}
      </div>
    )
  }

  const Interruptor = (props) => {

    let html;

    click = () => {

      switch (props.titulo) {
        case 'Power':
          dispatch(actionOn);
          break;
        case 'Bank':
          dispatch(actionBank);
          break;
        default:
          console.log('boton no definido');
          break;
      }
    }

    switch (props.titulo) {
      case 'Power':
        state.on ? html = <div className='boton-right'></div> : html = <div className='boton-left'></div>;
        break;
      case 'Bank':
        state.bank ? html = <div className='boton-right'></div> : html = <div className='boton-left'></div>;
        break;
      default:
        console.log('Boton desconocido');
        break;
    }

    return (
      <div className='interruptor' onClick={click}>
        <p>{props.titulo}</p>
        <div className='contInter centrar'>
          {html}
        </div>
      </div>
    );

  }

  const Control = () => {
    return (
      <div className='controles centrar'>
        <Interruptor titulo="Power" />
        <Display texto="Uno" />
        <InputVolumen />
        <Interruptor titulo="Bank" />
      </div>
    );
  }

  const Tecla = (props) => {
    const click = (e) => {
      if (!state.on) return;
      const sonido = new Audio(props.sound);
      sonido.volume = state.volumen / 100;
      sonido.play();
      dispatch(actionSetDisplay(props.texto));
    }
    return (
      <div className='tecla centrar drum-pad' onClick={click}>
        {props.letra}
      </div>
    );
  }

  const Teclado = () => {
    return (
      <div className='teclado'>
        <Tecla letra="Q" texto="Heater 1" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
        <Tecla letra="W" texto="Heater 2" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
        <Tecla letra="E" texto="Heater 3" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
        <Tecla letra="A" texto="Heater 4" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
        <Tecla letra="S" texto="Clap" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
        <Tecla letra="D" texto="Open HH" sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
        <Tecla letra="Z" texto="Kick n'Hat" sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
        <Tecla letra="X" texto="Kick" sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
        <Tecla letra="C" texto="Closed HH" sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
      </div>
    );
  }

  const Contenedor = (props) => {

    const [controles, setControles] = useState({
      on: true,
      bank: false,
      display: '',
      volumen: 10,
    });

    const cambiarDisplay = (str) => { //ojo
      setControles({
        on: controles.on,
        bank: controles.bank,
        volume: controles.volumen,
        display: str
      });
    }

    return (
      <div id="drum-machine" className='contenedor'>
        <Teclado estado={controles} cambiarDisplay={cambiarDisplay} />
        <Control />
      </div>
    );
  }

  return (
    <div className='app centrar'>
      <Contenedor />
    </div>
  )
}

export default App;






