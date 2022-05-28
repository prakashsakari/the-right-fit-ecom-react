import "./AddressForm.css";
import { useAddress } from "../../context";
import { v4 as uuid } from "uuid";
export const AddressForm = ({ setIsFormOpen }) => {
  const {
    userDetails,
    setUserDetails,
    newAddress,
    setNewAddress
  } = useAddress();
  const { name, number, address, landmark } = userDetails;

  const handleDummyAddress = () => {
    setUserDetails({
      ...userDetails,
      name: "Prakash Sakari",
      number: "01234567890",
      address:
        "004 B Wing Apex Tower, Kalina Santacruz (E), Mumbai 400029, MH, IN",
      landmark: "Kalina Market",
      isChecked: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewAddress([
      ...newAddress,
      {
        _id: uuid(),
        name,
        number,
        address,
        landmark,
        isChecked: false
      }
    ]);

    setUserDetails({
      ...userDetails,
      name: "",
      number: "",
      address: "",
      landmark: ""
    });

    setIsFormOpen((isFormOpen) => !isFormOpen);
  };

  return (
    <div className=" d-flex align-center justify-center form-container">
      <form
        className="d-flex direction-column align-center gap address-form"
        onSubmit={handleSubmit}
      >
        <input
          className="form-input lh-ls add-input"
          required
          value={name}
          placeholder="Name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
        />
        <input
          className="form-input lh-ls add-input"
          required
          value={number}
          placeholder="10 digit number"
          onChange={(e) =>
            setUserDetails({ ...userDetails, number: e.target.value })
          }
        />
        <textarea
          className="form-input lh-ls add-input"
          required
          value={address}
          placeholder="Address"
          onChange={(e) =>
            setUserDetails({ ...userDetails, address: e.target.value })
          }
        />
        <input
          className="form-input lh-ls add-input"
          value={landmark}
          placeholder="Landmark"
          onChange={(e) =>
            setUserDetails({ ...userDetails, landmark: e.target.value })
          }
        />
        <button
          className="button btn-primary cursor address-btn"
          onClick={handleDummyAddress}
        >
          Add Dummy Address
        </button>
        <button
          className="button btn-outline-primary cursor address-btn"
          // onClick={handleAddAddress}
        >
          Add Address
        </button>
      </form>
    </div>
  );
};
