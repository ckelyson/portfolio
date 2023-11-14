import styles from './Projetos.module.css'


function Projetos () {
    return (
        <section id='projetos' className={styles.projetos}>
            <div className={styles.interface}>
                <h2 className={styles.titulo}>MEUS <span>PROJETOS.</span></h2>
                <div className={styles.flex}>
                    <div className={styles.imgProjeto1}>
                        <div className={styles.overlay}>
                            <a href='https://evelynsouza.vercel.app/'>PORTFÓLIO WEB</a>
                        </div>
                    </div>
                    <div className={styles.imgProjeto2}>
                        <div className={styles.overlay}>PROJETO DE AULA</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos