import './Login.css'
function Login(){
    
    return(
        <div className="login-container">
        <div className="login-header">
          <h1 className='h1'>Login</h1>
        </div>
        <form>
          <input type="text" className="login-input" placeholder="Nome de usuário" />
          <input type="password" className="login-input" placeholder="Senha" />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      
      </div>
    )
    
}
export default Login
