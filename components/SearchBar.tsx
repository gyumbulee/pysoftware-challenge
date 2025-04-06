import { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const handleClear = () => {
    setSearchQuery(''); // Clear the search query when the button is clicked
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Address"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search address"
      />
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
