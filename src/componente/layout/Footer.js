import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer(){
    return <footer className={styles.footer}>
        <h3>©2023 emprega aí  </h3>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
            <li><FaTwitter/></li>
        </ul>
    </footer>
}

export default Footer