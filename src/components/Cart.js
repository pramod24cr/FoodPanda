import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 m-auto">
        {cartItems?.length > 0 && (
          <button
            className="px-4 py-2 mb-4 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {cartItems?.length === 0 ? (
          <h2 className="text-xl text-gray-600">
            Cart is empty. Add items to the cart!
          </h2>
        ) : (
          <>
            <ItemList items={cartItems} showAddButton={false} />
            <div className="mt-6 px-8 py-4 bg-gray-100 text-black font-bold text-xl rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
              <span>Total: </span>
              <span className="text-green-600">₹{totalPrice.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
