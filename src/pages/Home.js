import ButtonHome from "./ButtonHome"
import ImagemHome from "../img/figurinha.png"
import home from "../img/medico.png"
import logomarca from "../img/logoEmpregaAi.jpg"

import './Home.css'



function Home() {
    return (
        <section className="inicio">
            
            <div className="frente">
            <img className="logo" src={logomarca} alt="BackGround" title="Emprega.Aí"/>
             <h1>Conquiste o seu futuro profissional com O EMPREGA AÍ - O lugar perfeito para encontrar oportunidades que impulsionam a sua carreira.</h1>
            </div><br></br>
            
            <img className="figurinha_trabalho" src={ImagemHome} alt="BackGround" title="Trabalho"/> 
                
            <img className="medico" src={home} alt="BackGround" title="medico"/> 
           
            <p className="paragrafo">Faça seu cadastro e tenha oportunidade de conseguir o seu sonhado emprego</p>

            <div>
           
            
            </div>
            
            
            <ButtonHome />

        </section>
    )
}

export default Home