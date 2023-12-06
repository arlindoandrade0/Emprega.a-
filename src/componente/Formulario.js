
import './Button.css';
import React, { useState } from 'react';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    logradouro: '',
    cidade: '',
    numero: '',
    senha: '',
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/cadastro`, {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      const json = await response.json()
      console.log(response.status)
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <form onSubmit={handleForm}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          required
          value={formData.nome}
          placeholder="Digite seu nome"
          onChange={(e) => {handleFormEdit(e, 'nome')}}
        />
      </div>

      <div>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => {handleFormEdit(e, 'email')}}
          placeholder="Digite seu E-mail"
        />
      </div>

      <div>
        <label>Logradouro</label>
        <input
          type="text"
          name="logradouro"
          required
          value={formData.logradouro}
          onChange={(e) => {handleFormEdit(e, 'logradouro')}}
          placeholder="Logradouro"
        />
      </div>

      <div>
        <label>Cidade</label>
        <input
          type="text"
          name="cidade"
          required
          value={formData.cidade}
          onChange={(e) => {handleFormEdit(e, 'cidade')}}
          placeholder="Cidade"
        />
      </div>

      <div>
        <label>Número</label>
        <input
          type="text"
          name="numero"
          required
          value={formData.numero}
          onChange={(e) => {handleFormEdit(e, 'numero')}}
          placeholder="Número"
        />
      </div>

      <div>
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          required
          value={formData.senha}
          onChange={(e) => {handleFormEdit(e, 'senha')}}
          placeholder="Senha"
        />
      </div>
      <button className="glow-on-hover" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default Formulario;
