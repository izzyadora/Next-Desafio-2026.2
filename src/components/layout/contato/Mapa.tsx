export default function Mapa() {
  return (
    <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-[#2d221c]/20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127404.96053485281!2d-43.4649222507823!3d-21.728878950493897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989c43e1f85da1%3A0x6236b026b3a0a468!2sJuiz%20de%20Fora%2C%20MG!5e1!3m2!1spt-BR!2sbr!4v1787281131681!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Mapa de Localização"
      ></iframe>
    </div>
  );
}
