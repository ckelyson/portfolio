import styles from './Inicio.module.css'


import NavigationMenu from '../Botao'


function Inicio () {
    return (
        <header>
            <div className={styles.interface}>
               <div className={styles.name}>
                    <h4 className='nome'>CKELYSON MOURA</h4>                 
               </div> 

                <NavigationMenu/>
             
            </div>
        </header>
    )
}

export default Inicio