import styles from './Inicio.module.css'
import logo from '../../assets/logo2.0.png'
import icon from '../../assets/list.svg'

function Inicio () {
    return (
        <header>
            <div className={styles.interface}>
               <div className={styles.logo}>
                    <a href='#'>
                        <img src={logo} className={styles.logo} alt='logo da página portfolio'/>
                    </a>
               </div> 

               <nav className={styles.menuDesktop}>
                    <ul className={styles.menuDaListaDesktop}>
                        <li><a href='#introducao'>Inicio</a></li>
                        <li><a href='#especialidades'>Especialidades</a></li>
                        <li><a href='#sobre'>Sobre</a></li>
                        <li><a href='#projetos'>Projetos</a></li>
                    </ul>
                    <div className={styles.mobileIcon}>
                        <button><img src={icon} className={styles.Icon}/></button>
                    </div>
               </nav>

               <div className={styles.menuMobile}>
                    <ul className={styles.menuDaListaMobile}>
                        <li><a href='#'>Inicio</a></li>
                        <li><a href='#'>Especialidades</a></li>
                        <li><a href='#'>Sobre</a></li>
                        <li><a href='#'>Projetos</a></li>
                    </ul>
               </div>
            </div>
        </header>
    )
}

export default Inicio