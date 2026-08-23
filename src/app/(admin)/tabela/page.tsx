import Tabela from "@/src/components/layout/tabela/Tabela";
import { getProdutos } from "@/actions/admin/actions";

export default async function TabelaPage() {

    const product = await getProdutos();

    return(
        <Tabela produtos={product}/>
    );
}