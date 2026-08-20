import Link from "next/link";
import BuscaAuxiliar from "./BuscaAuxiliar"

export default function Busca(){
    const count = 0
    return(
        <div className="w-full">
            <BuscaAuxiliar count={count} />
            {count === 0 ? (
                <div>
                    <span>
                        Nenhum item encontrado
                    </span>
                    <span>
                        Tente refinar sua busca, ou explore <Link href="/produtos">nossos produtos</Link>.
                    </span>
                </div>
            ):(
                <div className="w-full flex flex-col gap-12">
                    
                </div>
            )
            }
        </div>
    );
}