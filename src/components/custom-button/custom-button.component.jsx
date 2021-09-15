import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  // props.children is more like vue slot in react
  <button className={`${isGoogleSignIn ? 'google-signin': ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
