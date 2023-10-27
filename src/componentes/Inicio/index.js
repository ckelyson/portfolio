import styles from './Inicio.module.css'
import logo from '../../assets/logo2.1.png'

import NavigationMenu from '../Botao'


function Inicio () {
    return (
        <header>
            <div className={styles.interface}>
               <div>
                    <img src={logo} className={styles.logo} alt='logo da página portfolio'/>                   
               </div> 

                <NavigationMenu/>
             
            </div>
        </header>
    )
}

export default Inicio