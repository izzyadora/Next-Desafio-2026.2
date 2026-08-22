export type IdentityItem = {
  id: number;
  title: string;
  text: string;
};

type CardPilarProps = {
  item: IdentityItem;
};

export default function CardPilar({ item }: CardPilarProps) {
  return (
    <div className="flex flex-col gap-1 bg-oliva text-creme p-6 rounded-xl text-center shadow-md hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 hover:cursor-pointer">
      <h3 className="font-source-serif text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-bold tracking-wider uppercase items-center">
        {item.title}
      </h3>
      <p className="font-dm-sans text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] font-light leading-snug text-creme/90">
        {item.text}
      </p>
    </div>
  );
}