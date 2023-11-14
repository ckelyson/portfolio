import styles from './Introducao.module.css'
import foto from '../../assets/ck1.png'

function Introducao () {
    return (
        <main>
            <section id='introducao' className={styles.topoDoSite}>
                <div className={styles.interface}>
                    <div className={styles.flex}>
                        <div className={styles.txt_topo_site}>
                            <h1>TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL.<span></span></h1>
                            <p>Técnico em Desenvolvimento de Sistemas pela Instituição de ensino estadual ETE Edson Mororó Moura,
                                Especialização em Front End e Banco de Dados pelas Instituições Alura+Oracle do programa Next Education,
                                cursando Ensino Superior em Engenharia de Software pelo Centro Universitário Leonardo da Vinci
                               (UNIASSELVI).
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