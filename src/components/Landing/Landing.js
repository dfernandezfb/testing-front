import imagen from './../../assets/img/portada.jpg'
import './Landing.css'

const Landing = () => {
  return ( 
    <>
      <div className="landing-portada">
        <div className='landing-portada-text'>
          <h1 className='logo-app text-animation-landing super-text-landing text-center'>Cripto 21i</h1>
          <p className='text-animation-landing text-center'>Cotizaciones en tiempo real de todas las criptomonedas actuales</p>
        </div>
      </div>
      
      {/* <div className="landing-part-two">
        <div className="landing-cards">
          <div className="landing-card hovercard">
            <div className="front">FRONT</div>
            <div className="back">BACK</div>
          </div>
        </div>
      </div> */}
    </>
   );
}
 
export default Landing;