import Form from "../componente/Form"
import Button from "../componente/Button"
import './Cadastro.css'
function Cadastro() {
    return (
        <div className="container">
            <div className="form">
            <h1>Cadastro</h1>
            <p>Preencha os dados para criar uma conta</p>

                <Form label="Nome Completo" type="name" placeholder="Digite seu nome" id="Nome" />

                <Form label="E-mail" type="email" placeholder="Digite seu E-mail" id="email" />

                <Form label="Logradouro" type="text" placeholder="Digite seu Logradouro" id="logradouro" />
                <Form label="Cidade" type="text" placeholder="Digite seu Cidade" id="Cidade" />

               
                <Form label="Número" type="telephone" placeholder="Digite seu Número" id="numero" />

                <Form label="Senha" type="password" placeholder="Digite uma senha" id="senha" />

                <Button />
            </div>
        </div>
    )
}

export default Cadastro