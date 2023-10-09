import ButtonHome from "./ButtonHome"
import ImagemHome from "../img/figurinha.png"
import home from "../img/medico.png"
import './Home.css'


function Home() {
    return (
        <section className="Home">
            <h1 className="titulo">Bem-vindo ao EMPREGA AÍ</h1>
            <p className="paragrafo">Faça seu cadastro e tenha oportunidade de conseguir o seu sonhado emprego</p>

            <div>
            <img className="figurinha_trabalho" src={ImagemHome} alt="BackGround" title="Trabalho"/> 
            <img className="medico" src={home} alt="BackGround" title="medico"/> 
            </div>
            
            
            <ButtonHome />

        </section>
    )
}

export default Home