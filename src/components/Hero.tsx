const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Financial consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Expert Financial Guidance
          <br />
          <span className="text-accent">for Your Future</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Transform your financial journey with our expert consulting services.
          We help businesses and individuals achieve their financial goals.
        </p>
        <button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;