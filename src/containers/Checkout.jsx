import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import sumTotalPrice from '../utils/sumTotalPrice';
import MetaHead from '../components/MetaHead';
import '../styles/containers/Checkout.scss'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (index) => () => {
    removeFromCart(index)
  } 

  const handleSumTotal = sumTotalPrice(cart);

  return (
    <>
      <MetaHead
        title="Merch - Home Checkout" 
        description="Merch, where you do merch" 
        image="https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
        url="https://merchi.xyz/"
      />
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
    </>
  )
}
export default Checkout
