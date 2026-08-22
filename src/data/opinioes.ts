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
    autor: "Marcos V.",
    texto:
      "O melhor espresso da cidade! O ambiente é super aconchegante e o atendimento impecável. Virou meu ritual diário.",
    avaliacao: 5,
    fotoUrl: "https://avatars.githubusercontent.com/u/165046764?v=4",
  },
  {
    id: "2",
    autor: "Áurea S.",
    texto:
      "Cremoso, quentinho e com aquele aroma que abraça a alma. Os bolos caseiros são simplesmente irresistíveis!",
    avaliacao: 5,
    fotoUrl: "https://avatars.githubusercontent.com/u/144445780?v=4",
  },
  {
    id: "3",
    autor: "Gabriela C.",
    texto:
      "Lugar perfeito para trabalhar ou bater papo. O café coado é espetacular e a energia do espaço é única.",
    avaliacao: 5,
    fotoUrl: "https://avatars.githubusercontent.com/u/160670950?v=4",
    
  },
];