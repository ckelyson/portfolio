import styles from './Rodape.module.css'
import logo from '../../assets/logo2.0.png'
import './Rodape.module.css'

function Rodape () {
    return (
        <footer>
            <div className={styles.interface}>
                <div className={styles.linhaFooter}>
                    <div className={styles.flex}>
                        <div className={styles.logoFooter}>
                            <img src={logo} className={styles.logo}/>
                        </div>
                        <div className={styles.btnSocial}>
                            <a href='#'><button><i class="bi bi-tiktok"></i></button></a>
                            <a href='#'><button><i class="bi bi-instagram"></i></button></a>
                            <a href='#'><button><i class="bi bi-linkedin"></i></button></a>
                        </div>
                    </div>
                </div>
                <div className={styles.linhaFooter}>
                    <p><i class="bi bi-envelope-fill"></i> <a href='mailto:ckelyson777@gmail.com'>ckelyson777@gmail.com</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape