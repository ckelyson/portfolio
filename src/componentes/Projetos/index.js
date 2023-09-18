import styles from './Projetos.module.css'


function Projetos () {
    return (
        <section id='projetos' className={styles.projetos}>
            <div className={styles.interface}>
                <h2 className={styles.titulo}>MEUS <span>PROJETOS.</span></h2>
                <div className={styles.flex}>
                    <div className={styles.imgProjetos}>
                        <div className={styles.overlay}>Novidades em breve</div>
                    </div>
                    <div className={styles.imgProjetos}>
                        <div className={styles.overlay}>Novidades em breve</div>
                    </div>
                    <div className={styles.imgProjetos}>
                        <div className={styles.overlay}>Novidades em breve</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos