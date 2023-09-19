import styles from './Inicio.module.css'
import logo from '../../assets/logo2.0.png'
import MobileNavigation from '../Botao'


function Inicio () {
    return (
        <header>
            <div className={styles.interface}>
               <div>
                    <img src={logo} className={styles.logo} alt='logo da página portfolio'/>                   
               </div> 

                <MobileNavigation/>
             
            </div>
        </header>
    )
}

export default Inicio