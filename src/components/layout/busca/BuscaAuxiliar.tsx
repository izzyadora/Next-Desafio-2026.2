import {Search as SearchIcon} from 'lucide-react';

type AuxiliarProps = {
    count: number;
}

export default function BuscaAuxiliar({count}: AuxiliarProps){
    return(
        <form className="flex w-full lg:w-10/12" id="auxSearch" autoComplete="off">
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-militar-500 left-4" />
                    <input id="aux-search-input" name="aux-search" type="text" className="w-full rounded-xl px-16 py-6 text-chocolate border border-chocolate/50 focus:ring-chocolate transition-all duration-300"></input>
                </div>
                <span className="text-chocolate/70">Buscar {count} itens</span>
            </div>
        </form>
    );

}