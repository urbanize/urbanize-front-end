
import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    contato: string;
    data: string;
    midia: string;
    tema?: Tema| null;
    usuario?: User| null
    endereco: string;
}

export default Postagem;