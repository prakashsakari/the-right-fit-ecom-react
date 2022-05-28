import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    number: "",
    address: "",
    landmark: "",
    isChecked: false
  });

  const [newAddress, setNewAddress] = useState([]);

  return (
    <AddressContext.Provider
      value={{ userDetails, setUserDetails, newAddress, setNewAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
