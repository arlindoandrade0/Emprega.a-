import React, { useState } from 'react';

const PerfilUsuario = ({ userData, onSubmit }) => {
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...userData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedData);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            value={editedData.nome}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleInputChange}
          />
          {/* Outros campos do usuário */}
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <div>
          <h2>Perfil do Usuário</h2>
          <p>Nome: {userData.nome}</p>
          <p>Email: {userData.email}</p>
          {/* Outros campos do usuário */}
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      )}
      {/* Adicionar área para adicionar currículo */}
    </div>
  );
};

export default PerfilUsuario;
