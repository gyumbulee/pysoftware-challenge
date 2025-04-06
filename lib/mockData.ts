// Mock Menu Items
export const menuItems = [
    { id: 1, menu_item: "Home", href: "/" },
    { id: 2, menu_item: "About", href: "about/" },
    { id: 3, menu_item: "Contact", href: "contact/" },
    { id: 4, menu_item: "Pricing", href: "price_list/" },
    { id: 5, menu_item: "Address", href: "address/"},
    { id: 6, menu_item: "Student", href: "students/" },
    { id: 7, menu_item: "Tutor", href: "tutor/" },
    { id: 8, menu_item: "Sign Up", href: "signup/" },
    { id: 9, menu_item: "Login", href: "login/" },
    { id: 10, menu_item: "Help", href: "help/" },
  ];
  
// lib/mockData.ts
export const addresses = Array.from({ length: 400 }, (_, index) => ({
    id: index + 1,
    first_name: `Ibrahim `,
    last_name: `Muazu Muazu`,
    street: `51B Suleiman Street, Wase`,
    postcode: `942105`,
    state: "Plateau State",
    country: "Nigeria",
    lat: 38.8951 + index,
    lon: -77.0364 + index
  }));  
  export const editAddress = (id: number, updatedAddress: any) => {
    const index = addresses.findIndex((address) => address.id === id);
    if (index !== -1) {
      addresses[index] = { ...addresses[index], ...updatedAddress };
      return addresses[index];
    }
    return null;
  };
  
  // Mock function for deleting an address
  export const deleteAddress = (id: number) => {
    const index = addresses.findIndex((address) => address.id === id);
    if (index !== -1) {
      return addresses.splice(index, 1); // Remove the address from the array
    }
    return null;
  };
  