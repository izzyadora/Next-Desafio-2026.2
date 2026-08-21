import { fetchProductByID } from "@/actions/individual/actions";
import PaginaVisualizacao from "@/src/components/layout/produtos/PaginaVisualizacao";

export default async function Visualizacao({params}: {params: {id: string}}) {
    const id = parseInt(params.id, 10);
    const product = await fetchProductByID(id);

    return(
        <main>
            <div className="flex flex-col gap-0 m-0 p-0">
                <PaginaVisualizacao product={product} />
            </div>
        </main>
    );
}