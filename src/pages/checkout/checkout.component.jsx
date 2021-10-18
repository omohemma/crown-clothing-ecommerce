import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaystackCheckoutButton from '../../components/paystack-checkout-button/paystack-checkout-button';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cart) => (
      <CheckoutItem key={cart.id} cartItem={cart} />
    ))}
    <div className="total">
      <span>TOTAL : ${total}</span>
    </div>

    {/** Checkout Button */}

    <PaystackCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
