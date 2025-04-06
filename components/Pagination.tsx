interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handlePageChange: (direction: string) => void;
  }
  
  const Pagination = ({ currentPage, totalPages, handlePageChange }: PaginationProps) => {
    return (
      <div className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="p-2 border rounded bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
          aria-disabled={currentPage === 1}
          aria-label="Previous page"
        >
          Previous
        </button>
        
        <span className="self-center text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className="p-2 border rounded bg-blue-500 text-white disabled:bg-gray-300 hover:bg-blue-600 transition-colors"
          aria-disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  