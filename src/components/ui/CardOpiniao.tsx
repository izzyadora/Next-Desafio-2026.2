import Image from "next/image";
import { Quote, Star } from "lucide-react"; 
import { Opiniao } from "@/src/data/opinioes";

interface PropsCardOpiniao {
  opiniao: Opiniao;
}

export default function CardOpiniao({ opiniao }: PropsCardOpiniao) {
  return (
    <div className="bg-creme text-chocolate flex flex-col justify-between rounded-2xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 hover: cursor-pointer ">
      <div>
        <div className="bg-militar-300 text-militar-500 mb-2 flex h-8 w-8 items-center justify-center rounded-full">
          <Quote className="h-4 w-4 fill-current" />
        </div>

        {/* Texto da opinião */}
        <p className="font-dm-sans text-[0.8rem] leading-relaxed text-chocolate/90">
          {opiniao.texto}
        </p>
      </div>


      <div className="mt-6 flex items-center gap-3">
        {/* Foto do usuário */}
        <div className="bg-chocolate relative h-10 w-10 overflow-hidden rounded-full flex-shrink-0">
          {opiniao.fotoUrl && (
            <Image
              src={opiniao.fotoUrl}
              alt={opiniao.autor}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div>
          <h4 className="font-dm-sans text-sm font-bold text-chocolate">
            {opiniao.autor}
          </h4>
          
          <div className="mt-0.5 flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`h-3.5 w-3.5 ${
                  index < opiniao.avaliacao
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}