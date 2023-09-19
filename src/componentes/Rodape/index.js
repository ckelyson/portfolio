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
                            <a href='https://wa.me/5581993332044'><button><i class="bi bi-whatsapp"></i></button></a>
                            <a href='https://instagram.com/mouraa_ckelyson?igshid=MzRlODBiNWFlZA=='><button><i class="bi bi-instagram"></i></button></a>
                            <a href='mailto:ckelyson777@gmail.com'><button><i class="bi bi-envelope-fill"></i></button></a>
                        </div>
                    </div>
                </div>
                <div className={styles.linhaFooter}>
                    <p><i class="bi bi-envelope-fill"></i> <a href='mailto:ckelyson777@gmail.com'>ckelyson777@gmail.com</a></p>
                    <p><i class="bi bi-c-circle"></i> Desenvolvido por Ckelyson Moura</p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape