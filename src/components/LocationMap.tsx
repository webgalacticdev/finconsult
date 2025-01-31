const LocationMap = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=51.5074,0.1278', '_blank');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
        
        <div 
          className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
          onClick={handleMapClick}
        >
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=51.5074,-0.1278&zoom=13&size=1200x400&key=YOUR_API_KEY"
            alt="Company location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors">
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
              <p className="font-medium">Click to open in Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;