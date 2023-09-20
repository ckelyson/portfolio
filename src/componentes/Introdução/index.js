import styles from './Introducao.module.css'
import foto from '../../assets/foto.png'

function Introducao () {
    return (
        <main>
            <section id='introducao' className={styles.topoDoSite}>
                <div className={styles.interface}>
                    <div className={styles.flex}>
                        <div className={styles.txt_topo_site}>
                            <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span></h1>
                            <p>Criatividade e inovação andam lado a lado. Com uma combinação única de disign impactante,
                                funcionalidade intuitiva e otimização para resultados.
                                Estou pronto para criar a presença online dos seus sonhos.
                            </p>
                            <div className={styles.btnContato}>
                                <a href='#contato'>
                                    <button>Entre em contato</button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.img_topo_site}>
                            <img src={foto} className={styles.fotoPessoa} alt='minha foto'/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Introducao