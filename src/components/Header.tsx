import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-2 text-xl font-bold">FinConsult</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary">Contacts</Link>
            <Link to="/faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary">About us</Link>
            <button className="text-sm font-medium hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/blog" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Blog</Link>
            <Link to="/contacts" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Contacts</Link>
            <Link to="/faq" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">FAQ</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">About us</Link>
            <button className="w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-50">
              <Search className="h-5 w-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;