import {Action } from './actions';
// adicione o atributo tipo no inicialState e UserState
export interface UserState {
    tokens: string,
    names: string,
    tipos: string,
    fotos: string
}

const initialState = {
    tokens: "",
    names: "",
    tipos: "",
    fotos: ""
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names, tipos: state.tipos, fotos: state.fotos};
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens, tipos: state.tipos, fotos: state.fotos};
        }
        case "ADD_TIPO": {
            return {tipos: action.payload, tokens: state.tokens,names: state.names,fotos: state.fotos};
        }
        case "ADD_FOTO": {
            return {fotos: action.payload, tokens: state.tokens, tipos: state.tipos, names: state.names};
        }

        default:
            return state
    }
}