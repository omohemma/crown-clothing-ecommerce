import { connect } from 'react-redux';
import {
  addItemToCart,
  removeItem,
  removeItemsFromCart,
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItems, addItem , removeItem}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <span className="remove" onClick={() => removeItems(cartItem)}>
        &#10008;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItems: (item) => dispatch(removeItemsFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
