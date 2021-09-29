import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItemToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
