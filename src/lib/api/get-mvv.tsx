export type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiResponse = {
    identities: ApiProps[];
    status: number;
}

export async function getIdentities(): Promise<ApiProps[]>{
    const response = await fetch("https://treinamentoapi.codejr.com.br/api/identities");

    if(!response.ok){
        throw new Error(`Erro ao dar fetch nos dados, status: ${response.status}`)
    }
    
    const data: ApiResponse = await response.json();

    return data.identities;
}