export type Action = {type: "ADD_TOKEN"|"ADD_NAME"|"ADD_TIPO"|"ADD_FOTO"|"ADD_ID"|"ADD_BIO"|"ADD_ENDERECO"; payload: any};

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
export const addId = (id: number): Action =>({
    type: "ADD_ID",
    payload: id,
});
export const addBio = (bio: string): Action =>({
    type: "ADD_BIO",
    payload: bio,
});
export const addEndereco = (endereco: string): Action =>({
    type: "ADD_ENDERECO",
    payload: endereco,
});
