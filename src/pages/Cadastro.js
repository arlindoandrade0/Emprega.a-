import Formulario from "../componente/Formulario"

import './Cadastro.css'
function Cadastro() {
    return (
        <div className="wrapper">
      
        <div className="container">
        <div className="form-wrapper">
        <form className="form">
            <h1>Cadastro</h1>
            <p>Preencha os dados para criar uma conta</p>

                <Formulario />

                </form>
            </div>
        </div>
        </div>
    )
}

export default Cadastro