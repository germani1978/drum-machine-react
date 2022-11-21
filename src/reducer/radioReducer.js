const VOLUMENSET = 'volumenSet';

const SETDISPLAY = 'SetDisplay';
const ON = 'on-off';
const BANK = 'bank';

const defaultState = {
    display: '',
    volumen: 57,
    on: true,
    bank: false,
  }

export const actionSetVolumen = (volumen) =>{
  return {
    type: VOLUMENSET,
    volumen
  }
}
export const actionSetDisplay = (display) => {
    return {
        type: SETDISPLAY,
        display
    }
}
export const actionOn = {
    type: ON
}
export const actionBank = {
    type: BANK
}

export const radioReducer = ( state = defaultState, action ) => {
    switch (action.type) {
      case VOLUMENSET:
        return {
          ...state,
          volumen: action.volumen
        }
      case SETDISPLAY:
        return {
          ...state,
          display: action.display
        }
      case ON:
        return {
          ...state,
          on: !state.on
        }
      case BANK:
        return {
          ...state,
          bank: !state.bank
        }
    
      default:
        return state;
    }
  } 