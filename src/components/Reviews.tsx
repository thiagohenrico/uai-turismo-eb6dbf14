import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup is handled by Elfsight
    };
  }, []);

  return (
    <section id="avaliacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Avaliações reais de clientes verificadas pelo Google.
          </p>
        </div>
        
        <div className="elfsight-app-b02b9999-5753-45a0-8701-89be039b0a05" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Reviews;
