import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XRaAW26WOPf6dfS8XftZIdzH003Mr0AR1s';

  const onToken = token => {
    //console.log(token);
    //alert('Payment Successful');
    axios({
      url: 'payment',
      method: 'post',
      data:{
        amount:priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment success");
    }).catch(err => {
      console.log('Error: ', JSON.parse(err));
      alert('Payment Unsuccessful. Please use the provided credit card');
    })
  }
  return (<StripeCheckout label='Pay Now' name='Kritapas Ltd.' billingAddress="billingAddress" shippingAddress="shippingAddress" image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}/>)
}

export default StripeCheckoutButton;
