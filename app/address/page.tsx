// app/address/page.tsx
'use client';
import { useState, useMemo } from 'react';
import { addresses, editAddress, deleteAddress } from '../../lib/mockData'; // Mock data
import AddressCard from '../../components/AddressCard';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AddressPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const addressesPerPage = 10;

  // Memoizing filteredAddresses to avoid recalculating on every render
  const filteredAddresses = useMemo(() => {
    return addresses.filter(
      (address) =>
        address.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        address.last_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const indexOfLastAddress = currentPage * addressesPerPage;
  const indexOfFirstAddress = indexOfLastAddress - addressesPerPage;
  const currentAddresses = filteredAddresses.slice(indexOfFirstAddress, indexOfLastAddress);
  const totalPages = Math.ceil(filteredAddresses.length / addressesPerPage);

  const handlePageChange = (direction: string) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (id: number, updatedData: any) => {
    const updatedAddress = editAddress(id, updatedData);
    if (updatedAddress) {
      console.log('Address updated:', updatedAddress);
    } else {
      console.error('Error updating address');
    }
  };

  const handleDelete = (id: number) => {
    const deletedAddress = deleteAddress(id);
    if (deletedAddress) {
      console.log('Address deleted:', deletedAddress);
    } else {
      console.error('Error deleting address');
    }
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Address List</h1>

        {/* Search Bar */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Address Cards */}
        <div className="mt-6">
          {currentAddresses.length === 0 ? (
            <p className="text-lg text-gray-600">No addresses found.</p>
          ) : (
            currentAddresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AddressPage;
