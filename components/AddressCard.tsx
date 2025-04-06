import React, { useState } from 'react';

interface Address {
  id: number;
  first_name: string;
  last_name: string;
  street: string;
  postcode: string;
  state: string;
  country: string;
}

interface AddressCardProps {
  address: Address;
  onEdit: (id: number, updatedData: any) => void;
  onDelete: (id: number) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ address, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState(address.first_name);
  const [updatedLastName, setUpdatedLastName] = useState(address.last_name);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    // Validate before saving
    if (!updatedFirstName || !updatedLastName) {
      alert('Both first and last name are required!');
      return;
    }

    const updatedData = {
      first_name: updatedFirstName,
      last_name: updatedLastName,
    };

    onEdit(address.id, updatedData);
    setIsEditing(false); // Close the edit form after submitting
  };

  const handleDelete = () => {
    // Confirm deletion before proceeding
    if (window.confirm(`Are you sure you want to delete this address for ${address.first_name} ${address.last_name}?`)) {
      onDelete(address.id);
    }
  };

  return (
    <div className="border p-4 mb-4 rounded-md hover:shadow-lg transition-all">
      <h2 className="text-xl font-semibold">
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedFirstName}
              onChange={(e) => setUpdatedFirstName(e.target.value)}
              className="border p-2 rounded mb-2"
              placeholder="First Name"
            />
            <input
              type="text"
              value={updatedLastName}
              onChange={(e) => setUpdatedLastName(e.target.value)}
              className="border p-2 rounded mb-2 ml-2"
              placeholder="Last Name"
            />
          </>
        ) : (
          <>{address.first_name} {address.last_name}</>
        )}
      </h2>
      <p>{address.street}, {address.state}, {address.country}</p>
      <p>{address.postcode}</p>

      <div className="flex space-x-4 mt-4">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
