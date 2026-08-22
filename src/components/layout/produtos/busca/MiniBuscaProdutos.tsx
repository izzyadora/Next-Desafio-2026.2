import { Search as SearchIcon } from "lucide-react";


export default function MiniBuscaProdutos(){
    return(
        <form className="flex w-full md:w-1/3" id="auxSearch" autoComplete="off">
            <div className="flex flex-col w-full gap-2 my-4">
                <div className="relative flex items-center w-full bg-white rounded-xl font-dm-sans">
                    <SearchIcon className="w-5 h-5 absolute text-militar-500 left-4" />
                    <input
                        id="aux-search-input"
                        name="aux-search"
                        type="text"
                        className="w-full rounded-xl px-12 py-4 text-chocolate border-2 border-chocolate/50 focus:ring-militar-500 transition-all duration-300"
                        placeholder="Busque seu produto aqui..."
                    ></input>
                </div>
            </div>
        </form>
    );
}