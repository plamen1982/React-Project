import React from 'react';
import './Home.css';
import shoppingCart from '../../pics/shopping-cart.svg'

function Home(){
    return(
        <React.Fragment>
        <main>
        <div className="pic">
          <button className="start-shopping">
            <div>
              <p style={{color: 'black'}}> Fresh</p>
            </div>
            <img src={shoppingCart} alt="shopping" className="shopping-cart" />
            <div> <p>Products </p></div>
          </button>
        </div>
       
      </main>
      </React.Fragment>
    )
}
export default Home