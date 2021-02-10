import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/containers/Information.scss';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      country: formData.get('country'),
      city: formData.get('city'),
      postal_code: formData.get('postal_code'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment')
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre completo"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Correo Electrónico"
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Dirección"
            />
            <input 
              type="text" 
              name="apto" 
              id="apto" 
              placeholder="Apto" 
            />
            <input 
              type="text" 
              name="country" 
              id="country" 
              placeholder="País" 
            />
            <input 
              type="text" 
              name="city" 
              id="city" 
              placeholder="Ciudad" 
            />
            <input
              type="text"
              name="postal_code"
              id="postal_code"
              placeholder="Código Postal"
            />
            <input type="text" name="phone" id="phone" placeholder="Teléfono" />
          </form>
        </div>
        <div className="Information-buttons">
          <Link to="/checkout">
            <div className="Information-back">Regresar</div>
          </Link>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>

        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
