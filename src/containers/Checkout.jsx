import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import sumTotalPrice from '../utils/sumTotalPrice';
import '../styles/containers/Checkout.scss'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (index) => () => {
    removeFromCart(index)
  } 

  const handleSumTotal = sumTotalPrice(cart);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos' : 'Sin pedidos...'}</h3>
        {
          cart.map( (item, index) => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>
                  $
                  {item.price}
                </span>
              </div>
              <button type="button" onClick={handleRemove(index)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))
        }
      </div>
      {
        cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}
export default Checkout
