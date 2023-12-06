import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"
import logo from '../../img/logo.jpg'


function Navbar (){
    return(<nav className={styles.navbar}>
    <ul className={styles.list}>

          <NavLink
              activeClassName="is-active"
              to="/"
              exact
              >
            <div>
            <img src={logo} alt="Logo" className={styles.logomarca} />
            </div>
          </NavLink>
    
    
          
           <li className={styles.item}>
            <NavLink
              activeClassName="is-active"
              to="/"
              exact
              >
            Home
          </NavLink>
             </li>
        

             <li className={styles.item}>
          <NavLink
              
              activeClassName="is-active"
              to="/vagas"
              exact
          >
            Vagas
          </NavLink> </li>


          <li className={styles.item}>
          <NavLink
             
              activeClassName="is-active"
              to="/cadastro"
              exact
          >
           Cadastro
          </NavLink>
           </li>

          <li className={styles.item}>
          <NavLink
             
              activeClassName="is-active"
              to="/login"
              exact
          >
          Login
          </NavLink>
           </li>

        
    </ul>
</nav>
    )
}

export default Navbar