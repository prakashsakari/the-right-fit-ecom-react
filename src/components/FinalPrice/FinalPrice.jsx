import "./FinalPrice.css";
<<<<<<< HEAD
import { useCart } from "../../context/cart-context";
=======
import { useCart, useAlert } from "../../context";
import { useNavigate } from "react-router-dom";
>>>>>>> 9c10e09 (added address and payment integration)

export const FinalPrice = () => {
  let {
    cartState: {
      cart,
      deliveryCharge,
      totalItemPrice,
      discountedPrice,
      totalAmount
    }
  } = useCart();

<<<<<<< HEAD
=======
  const { setAlert } = useAlert();
  const navigate = useNavigate();

>>>>>>> 9c10e09 (added address and payment integration)
  totalItemPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.newPrice) * currentValue.itemCount,
    0
  );

  const originalPrice = cart.reduce(
    (previousValue, currentValue) =>
      previousValue + Number(currentValue.oldPrice) * currentValue.itemCount,
    0
  );

  discountedPrice = originalPrice - totalItemPrice;

<<<<<<< HEAD
  totalAmount = Math.abs(totalItemPrice - discountedPrice + deliveryCharge);
=======
  totalAmount = Math.abs(originalPrice - discountedPrice + deliveryCharge);

  // const placeOrderHandler = () => {
  //   cartDispatch({
  //     type: "CLEAR_CART",
  //   })
  //   setAlert({
  //     open: true,
  //     message: "Order placed successfully",
  //     type: "success"
  //   })
  // }

  const placeOrderHandler = () => {
    navigate("/address");
  }
>>>>>>> 9c10e09 (added address and payment integration)

  return (
    <div className="total-price gutter-all-16 align-self">
      <h3 className="cart-title">Price Details</h3>
      <div className="price-distribution d-flex direction-column gap">
        <div className="items-purchased d-flex align-center">
          <p>Price ({cart.length} items)</p>
          <p className="mg-left">Rs. {totalItemPrice}</p>
        </div>
        <div className="discount-rate d-flex align-center">
          <p>Discount</p>
          <p className="mg-left">- Rs. {discountedPrice}</p>
        </div>
        <div className="delivery-charge d-flex align-center">
          <p>Delivery Charges</p>
          <p className="mg-left">Rs. {deliveryCharge}</p>
        </div>
      </div>
      <div className="total-amount d-flex align-center">
        <p>TOTAL AMOUNT </p>
        <p className="mg-left">Rs. {totalAmount}</p>
      </div>
      <p className="discount-text">
        You will save Rs. {discountedPrice} on this order
      </p>
      <button className="button btn-primary cursor btn-width">PLACE ORDER</button>
    </div>
  );
};
