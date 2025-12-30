import { Plane } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { SearchBar } from "../components/SearchBar";
import type { SearchResult } from "../types/Search";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  filteredResults: SearchResult[];
}

export function Header({ search, setSearch, filteredResults }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-gray-300 hover:text-white';
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2634] px-6 py-4 flex items-center justify-between shadow-md">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <Plane className="w-8 h-8 text-white transform -rotate-45" />
      <span className="text-2xl italic font-bold tracking-wide text-white">
        TravelBloom
      </span>
    </div>

    {/* Navigation */}
    <nav className="items-center hidden gap-8 md:flex">
      <Link to="/" className={`text-lg transition-colors ${isActive('/')}`}>
        Home
      </Link>
      <Link to="/about" className={`text-lg transition-colors ${isActive('/about')}`}>
        About Us
      </Link>
      <Link to="/contact" className={`text-lg transition-colors ${isActive('/contact')}`}>
        Contact Us
      </Link>
    </nav>

    <div className="hidden md:flex items-center bg-white rounded-md h-10 w-[450px]">

      {/* Search Bar */}
      {setSearch && filteredResults && (
        <SearchBar
          value={search}
          onChange={setSearch}
          results={filteredResults}
          onSelect={(value) => setSearch(value)}
        />

      )}



    </div>

    {/* Mobile Menu Button (Placeholder for responsiveness) */}
    <div className="md:hidden">
      {/* Mobile menu implementation would go here */}
    </div>
  </header>;
}