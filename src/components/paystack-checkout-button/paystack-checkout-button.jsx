import { PaystackButton } from 'react-paystack';

const PaystackCheckoutButton = ({ price }) => {
  const priceForPaystack = price * 100;

  const config = {
    reference: new Date().getTime().toString(),
    email: 'emmaomoh@gmail.com',
    amount: priceForPaystack,
    publicKey: 'pk_test_38a09f7224a996f572455ef889b7407011a5f62e',
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  const componentProps = {
    ...config,
    text: 'Pay Now',
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };

  return (
    <div className="App">
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackCheckoutButton;
