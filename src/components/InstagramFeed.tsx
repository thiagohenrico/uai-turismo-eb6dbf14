const InstagramFeed = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ✨ Nosso Instagram ao vivo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            🌴 Acompanhe nossos Reels, fotos e bastidores em tempo real!
          </p>
        </div>

        {/* Instagram Feed Embed */}
        <div 
          id="uai-instagram-feed" 
          className="max-w-7xl mx-auto p-5 bg-card rounded-3xl"
        >
          <iframe 
            src="https://cdn.commoninja.com/widgets/instagram-feed/iframe/ed5f6c60-6e99-4f31-88e7-898bf92f717f"
            className="w-full h-[700px] md:h-[700px] sm:h-[550px] border-none overflow-hidden rounded-2xl shadow-lg" 
            scrolling="no" 
            allowFullScreen
            title="UAI Turismo Instagram Feed"
          />
        </div>

        {/* CTA para seguir no Instagram */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/uai_turismo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir @uai_turismo
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
