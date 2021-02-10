import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import sumTotalPrice from '../utils/sumTotalPrice';
import '../styles/containers/Payment.scss';
import pass from '../../pass';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory()
  const clientID = pass.paypalPaymentClientID

  const totalPrice = sumTotalPrice(cart);
  const paypalOptions = {
    clientId: clientID,
    intent: 'capture',
    currency: 'USD'
  }
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }
  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder);
    }
    history.push('/checkout/success');
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resúmen de Pago:</h3>
        { 
          cart.map( item => (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>
                  $
                  {item.price}
                </span>
              </div>
            </div>
          ))
        }
        <div className="Payment-item">
          <div className="Payment-element">
            {
              totalPrice === 0 ? (
                <h4>Nada por pagar</h4>
              ) : (
                <>
                  <h4>Total a pagar</h4>
                  <span>
                    $
                    {totalPrice}
                  </span>
                </>
              )
            }
          </div>
        </div>
        {
          totalPrice > 0 ? (
            <div className="Payment-button">
              <PayPalButton
                paypalOptions={paypalOptions}
                buttonStyles={buttonStyles}
                amount={totalPrice}
                onPaymentStart={() => console.log('Start Payment')}
                onPaymentSuccess={(data) => handlePaymentSuccess(data)}
                onPaymentError={(error) => console.log(error)}
                onPaymentCancel={(data) => console.log(data)}          
              />
            </div>
          ) : (null)
        }
      </div>
    </div>
  );
}

export default Payment;
