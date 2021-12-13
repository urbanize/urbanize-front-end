import {Action } from './actions';
// adicione o atributo tipo no inicialState e UserState
export interface UserState {
    tokens: string,
    names: string,
    tipos: string,
}

const initialState = {
    tokens: "",
    names: "",
    tipos: "",
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names, tipos: state.tipos};
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens, tipos: state.tipos};
        }
        case "ADD_TIPO": {
            return {tipos: action.payload, tokens: state.tokens,names: state.names};
        }

        default:
            return state
    }
}