
import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    contato: string;
    data: string;
    midia: string;
    tema?: Tema| null
}

export default Postagem;