export interface Opiniao {
  id: string;
  autor: string;
  texto: string;
  avaliacao: number;
  fotoUrl?: string; 
}

export const OPINIOES_CLIENTES: Opiniao[] = [
  {
    id: "1",
    autor: "John D.",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac efficitur urna, ut venenatis ante.",
    avaliacao: 5,
  },
  {
    id: "2",
    autor: "John D.",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac efficitur urna, ut venenatis ante.",
    avaliacao: 5,
  },
  {
    id: "3",
    autor: "John D.",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac efficitur urna, ut venenatis ante.",
    avaliacao: 5,
  },
];