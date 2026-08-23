import { fetchProductByID } from "@/actions/individual/actions";
import PaginaVisualizacao from "@/src/components/layout/produtos/PaginaVisualizacao";
import NaoEncontrado from "@/src/components/layout/produtos/NaoEncontrado";

type VisualizacaoProps = {
  params: Promise<{ id: string }>;
};

export default async function Visualizacao({ params }: VisualizacaoProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = await fetchProductByID(productId);

  //Proteção contra ID inválido :)
  if (!product) {
    return(
        <main>
            <div className="flex flex-col gap-0 m-0 p-0">
                <NaoEncontrado/>
            </div>
        </main>
    );
  } 
  else {
    return (
      <main>
        <div className="flex flex-col gap-0 m-0 p-0">
          <PaginaVisualizacao product={{...product, itemsCart: []}}/>
        </div>
      </main>
    );
  }
}
