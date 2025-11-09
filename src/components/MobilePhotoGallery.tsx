import buggyTour from "@/assets/buggy-tour.jpg";
import maragogi from "@/assets/maragogi.jpg";
import praiaCarneiros from "@/assets/praia-carneiros.jpg";
import saoMiguel from "@/assets/sao-miguel.jpg";

const MobilePhotoGallery = () => {
  const photos = [
    { src: buggyTour, alt: "Passeio de Buggy" },
    { src: praiaCarneiros, alt: "Praia dos Carneiros" },
    { src: maragogi, alt: "Maragogi" },
    { src: saoMiguel, alt: "São Miguel dos Milagres" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#4A9FD8] to-[#67B8E3] overflow-hidden py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            SEU TURISMO NO LUGAR CERTO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative bg-white p-3 shadow-2xl transform transition-transform hover:scale-105 ${
                index === 0 ? "rotate-[-4deg]" : 
                index === 1 ? "rotate-[3deg]" : 
                index === 2 ? "rotate-[-2deg]" : 
                "rotate-[4deg]"
              }`}
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById("passeios");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary hover:text-white transition-all"
          >
            RESERVE JÁ
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default MobilePhotoGallery;
