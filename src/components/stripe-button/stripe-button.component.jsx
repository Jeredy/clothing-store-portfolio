import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KKn0aGWD2YRHglwe8CsXLcZ8GGvngFirpQVXpopLgAMnOdkACVhIRujc08xj8qGf3HNvJyziv8SdJ6k740J9UyG00U8LaifKC";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ASP Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;