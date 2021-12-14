
import Tema from './Tema'
import UserLogin from './UserLogin';

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    contato: string;
    data: string;
    midia: string;
    tema?: Tema| null;
    usuario?: UserLogin| null
}

export default Postagem;