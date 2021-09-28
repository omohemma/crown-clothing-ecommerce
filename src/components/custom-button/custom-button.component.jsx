import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  // props.children is more like vue slot in react
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-signin' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
