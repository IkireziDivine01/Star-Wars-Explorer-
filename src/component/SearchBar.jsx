import { Search } from 'lucide-react';
import PropTypes from "prop-types";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 pl-10 bg-gray-800 rounded-lg text-gray-100 
                 border border-gray-700 focus:border-yellow-400 focus:outline-none
                 transition-colors duration-200"
        aria-label="Search characters"
      />
      <Search 
        className="absolute left-3 top-3.5 text-gray-400" 
        size={20}
        aria-hidden="true"
      />
    </div>
  );
};

SearchBar.prototype = {
    searchQuery : PropTypes.any,
    onSearchChange: PropTypes.func
}

export default SearchBar;

