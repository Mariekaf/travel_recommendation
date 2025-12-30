import type { SearchResult } from "../types/Search";
import { Search } from 'lucide-react';


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  results: SearchResult[];
  onSearch?: () => void;
  onSelect: (value: string) => void;
  onClear?: () => void;
}


export function SearchBar({
  value,
  onChange,
  results,
  onSelect,
  onClear,
}: SearchBarProps) {
  return (
    <div className="relative">
      {/* INPUT */}
      <div className="flex items-center h-10 overflow-hidden bg-white rounded-md">
        <input
          type="text"
          placeholder="Enter a destination"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
        />
        <div className="flex items-center gap-2 pr-1">
          <Search className="w-5 h-5 text-teal-600" />
          <button className="bg-[#0d9488] text-white px-4 py-1.5 text-sm font-medium rounded hover:bg-teal-700 transition-colors">
            Search
          </button>
          <button onClick={onClear} className="bg-white text-[#0d9488] border border-[#0d9488] px-4 py-1.5 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
            Clear
          </button>
        </div>
      </div>

      {/* SUGGESTIONS */}
      {value && results.length > 0 && (
        <div className="absolute z-50 w-full bg-white rounded-md shadow-lg top-11">
          {results.map((item, index) => (
            <div
              key={index}
              onClick={() => onSelect(item.name)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <img src={item.img} alt="" />
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-gray-500">{item.type}</p> <br />
              <button className="bg-[#0d9488] text-white px-4 py-1.5 text-sm font-medium rounded hover:bg-teal-700 transition-colors">
                Visit
              </button>
            </div>
          ))}
        </div>
      )}

      {/* NO RESULT */}
      {value && results.length === 0 && (
        <div className="absolute w-full px-4 py-2 text-gray-400 bg-white rounded-md shadow-lg top-11">
          No destination found
        </div>
      )}
    </div>
  );
}
