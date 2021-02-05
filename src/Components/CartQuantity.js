import React from "react";

const CartQuantity = (props) => {
  const { product, incrementQuantity, decrementQuantity } = props;

  return (
    <div className="quantityBlock">
      <button
        type="button"
        name="increment"
        onClick={() => decrementQuantity(product)}
      >
        -
      </button>
      <p>{product.cartQuantity}</p>
      <button
        type="button"
        name="decrement"
        onClick={() => incrementQuantity(product)}
      >
        +
      </button>
    </div>
  );
};

export default CartQuantity;
