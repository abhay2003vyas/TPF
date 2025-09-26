import React from 'react';
import { Menu, X } from 'lucide-react';
const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Decorative floral elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-20">
        <div className="w-24 h-32 bg-white rounded-full blur-sm rotate-12"></div>
        <div className="w-16 h-24 bg-white rounded-full blur-sm -mt-16 ml-8 rotate-45"></div>
      </div>
      
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-20">
        <div className="w-20 h-28 bg-white rounded-full blur-sm -rotate-12"></div>
        <div className="w-14 h-20 bg-white rounded-full blur-sm -mt-12 mr-6 -rotate-45"></div>
      </div>
   

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto">
          {/* Subtitle */}
          <p className="text-white text-sm md:text-base font-light tracking-[0.3em] uppercase mb-8 opacity-90">
            Akki Ghodeswar Photography
          </p>
          
          {/* Main Heading */}
          <div className="space-y-4 mb-12">
            <div className="flex items-center justify-center">
              <div className="h-px bg-white w-16 mr-6"></div>
              <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] uppercase">
                Refined And <span className="italic font-serif">Artful</span> Storytelling.
              </h2>
            </div>
            <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-light tracking-[0.15em] uppercase">
              <span className="italic font-serif">Contemporary</span> And Editorial Portraits
            </h3>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-3 border border-white text-white font-light tracking-[0.2em] uppercase text-sm hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-px h-16 bg-white opacity-50 mx-auto mb-2"></div>
            <p className="text-white text-xs font-light tracking-[0.2em] uppercase opacity-50 writing-mode-vertical transform rotate-180">
              Scroll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;