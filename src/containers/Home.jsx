import React from 'react';
import Products from '../components/Products';
import MetaHead from '../components/MetaHead';

const Home = () => (
  <>
    <MetaHead
      title="Merch - Home Products" 
      description="Merch, where you do merch" 
      image="https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
      url="https://merchi.xyz/"
    />
    <div className="Home">
      <h1>Home</h1>
      <div>
        <Products />
      </div>
    </div>
  </>
);

export default Home;
