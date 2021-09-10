import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  // props.children is more like vue slot in react
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
