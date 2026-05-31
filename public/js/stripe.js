/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';


export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);
    
    const stripe = Stripe(
      'pk_test_51TYKK0LKgTNUzkx6cX24RA8kM9nF1dCvEUpluqmUpjcoa1vXRo8w5nbn5XR9HxtJurBWsjEJMejGqAs3FyvHdion00Z3GzI4KN'
    );
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
