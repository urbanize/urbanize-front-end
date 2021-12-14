export type Action = {type: "ADD_TOKEN"|"ADD_NAME"|"ADD_TIPO"|"ADD_FOTO"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

export const addName = (name: string): Action =>({
    type: "ADD_NAME",
    payload: name,
});

export const addTipo = (tipo: string): Action =>({
    type: "ADD_TIPO",
    payload: tipo,
});

export const addFoto = (foto: string): Action =>({
    type: "ADD_FOTO",
    payload: foto,
});