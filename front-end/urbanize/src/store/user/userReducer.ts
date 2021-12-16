import {Action } from './actions';

export interface UserState {
    tokens: string,
    names: string,
    tipos: string,
    fotos: string,
    ids: number,
    bios: string,
    enderecos: string,
}

const initialState = {
    tokens: "",
    names: "",
    tipos: "",
    fotos: "",
    ids: 0,
    enderecos: "",
    bios: "",
}

export const userReducer = (state: UserState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, names: state.names, tipos: state.tipos, fotos: state.fotos, ids: state.ids, bios: state.bios, enderecos: state.enderecos};
        }
        case "ADD_NAME": {
            return {names: action.payload, tokens: state.tokens, tipos: state.tipos, fotos: state.fotos, ids: state.ids, bios: state.bios, enderecos: state.enderecos};
        }
        case "ADD_TIPO": {
            return {tipos: action.payload, tokens: state.tokens,names: state.names,fotos: state.fotos, ids: state.ids, bios: state.bios, enderecos: state.enderecos};
        }
        case "ADD_FOTO": {
            return {fotos: action.payload, tokens: state.tokens, tipos: state.tipos, names: state.names, ids: state.ids, bios: state.bios, enderecos: state.enderecos};
        }
        case "ADD_ID": {
            return {ids: action.payload, tokens: state.tokens, tipos: state.tipos, names: state.names, fotos: state.fotos, bios: state.bios, enderecos: state.enderecos};
        }
        case "ADD_BIO": {
            return {bios: action.payload, tokens: state.tokens, tipos: state.tipos, names: state.names, ids: state.ids, fotos: state.fotos, enderecos: state.enderecos};
        }
        case "ADD_ENDERECO": {
            return {enderecos: action.payload, tokens: state.tokens, tipos: state.tipos, names: state.names, ids: state.ids, bios: state.bios, fotos: state.fotos};
        }

        default:
            return state
    }
}