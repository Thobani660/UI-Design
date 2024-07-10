import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav'

function App() {
  // const [count, setCount] = useState(0)

  const handleOrder = () => {
    alert("App is currently out of service!")
   };

  return (
    <>
      <div className="flex-container">
        <div className='Top'>
          <div onClick={handleOrder} className='Logo'>
            <div className='imglogo'></div>
              <img URL={{img:""}}></img>
               STARBUCKS
          </div>
          <div onClick={handleOrder} className='Menu'>Menu</div>
          <div onClick={handleOrder} className='Trending'>Trending</div>
          <div onClick={handleOrder} className='About'>About Us</div>
        
        </div>

        <div className='Middle'>
         <p>Smooth taste</p>
          <h1>Caramel <br />Ribbon</h1>
            <p>Indulge in layers of caramel sauce, whipped  <br />
              cream, crunchy sugar, and a drizzle of <br />
              caramel for the ultimate Frappucinno indulgence.
            </p>
          {/* <div>hey</div> */}
          <button onClick={handleOrder} className='Btn'>ORDER NOW</button>
        </div>

          <div className='circles'>
                <div className='btmCircle1'>
                  <div className='rate'>5.0
                    <span class="emojione--star"></span>
                  </div>
                </div>

                <div className='btmCircle2'>
                  <div className='rate'>4.7
                    <span class="emojione--star"></span>
                  </div>
                </div>

                <div style={{}} className='btmCircle3'>
                  <div className='rate'>4.9
                    <span class="emojione--star"></span>
                  </div>
                </div>
          </div>
            <div  className='Bottom'></div>
      
      </div>
      
    </>
  )
}

export default App
