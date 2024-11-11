/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-4 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-gray-700 disabled:opacity-50 
                 hover:bg-gray-600 transition-colors duration-200
                 disabled:hover:bg-gray-700"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>
      
      <span className="text-gray-300">
        Page {currentPage} of {totalPages}
      </span>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-gray-700 disabled:opacity-50 
                 hover:bg-gray-600 transition-colors duration-200
                 disabled:hover:bg-gray-700"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;