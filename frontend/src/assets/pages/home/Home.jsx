import minhaImagem from '../../img/irpod.jpg';
import iphone from '../../img/iphone.jpg';
import mcbook from '../../img/neomc.avif';
import inicio from '../../img/irpodini.jpg';
import './home.css';

export default function Home() {
  return (
    <div className="page-home">
      <div className="hero-section">
        <h1> Bem-vindo a TECH STORE</h1>
        <p>Sistema completo para gerenciar seus produtos com facilidade</p>

        <div className="telaInicio">
          <img src={inicio} alt="inicio" />
        </div>
        
        <div className="contener">
          <div className="conteiner-card">
            <h3>AirPods Max </h3>
                <img src={minhaImagem} />
          </div>
          
          <div className="conteiner-card">
            <h3> Iphone 17</h3>
              <img src={iphone} />
          </div>
          
          <div className="conteiner-card">
            <h3> MacBook Neo </h3>
             <img src={mcbook} />
          </div>
        </div>

        <div className= "bloco">
          <p>Comece a gerenciar seus produtos agora!</p>
        </div>
      </div>
    </div>
  )
}
