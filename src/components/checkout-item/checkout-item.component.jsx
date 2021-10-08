import { connect } from 'react-redux';
import { removeItemsFromCart } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>

      <span className="price">{price}</span>
      <span className="remove" onClick={() => removeItem(cartItem)}>
        &#10008;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemsFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
