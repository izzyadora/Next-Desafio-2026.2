import Tabela from "@/src/components/layout/tabela/Tabela";
import { getProdutos, CountProdutos } from "@/actions/admin/actions";


export default async function TabelaPage() {

    const product = await getProdutos();
    const totalItens = await CountProdutos();

    return(
        <Tabela produtos={product} total={totalItens}/>
    );
}