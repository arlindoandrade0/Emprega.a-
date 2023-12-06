import './Login.css'
import React, { useState } from 'react';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (username === 'usuario' && password === 'senha') {
      setLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="container2">
      {!loggedIn ? (
        <div className="login-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      ) : (
        <div>
          <h2>Bem-vindo, {username}!</h2>
         
        </div>
      )}
    </div>
  );
};

export default Login;
