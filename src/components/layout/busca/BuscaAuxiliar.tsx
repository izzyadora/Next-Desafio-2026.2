import {Search as SearchIcon} from 'lucide-react';

type AuxiliarProps = {
    count: number;
}

export default function BuscaAuxiliar({count}: AuxiliarProps){
    return(
        <form autoComplete="off">
            <div>
                <div>
                    <SearchIcon className="search-icon" />
                    <input id="aux-search-input" name="aux-search" type="text"></input>
                </div>
                <span>Buscar {count} itens</span>
            </div>
        </form>
    );

}