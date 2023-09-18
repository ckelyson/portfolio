import styles from './Sobre.module.css'
import imgSobre from '../../assets/fotoSobre.png'

function Sobre () {
    return (
        <section id='sobre' className={styles.sobre}>
            <div className={styles.interface}>
                <div className={styles.flex}>
                    <div className={styles.imgSobre}>
                        <img src={imgSobre} className={styles.imgSobreEstilo}/>
                    </div>
                    <div className={styles.txtSobre}>
                        <h2>MUITO PRAZER, <span>SOU CKELYSON MOURA.</span> </h2>
                        <p>
                            Tenho 20 anos de idade e tenho dedicado minha vida em busca do conhecimento e da excelência no campo da tecnologia.
                            Atualmente cursando Engenharia de Software, venho construindo uma base sólida e impressionante em minha carreira.
                        </p>
                        <p>
                            Minha jornada começou com a paixão pela programação, e rapidamente me destaquei como aluno
                            na formação Front-End através da instituição Alura, uma das referências no ensino de tecnologia.
                            Domino as linguagens e tecnologias essenciais para criar interfaces de usuário impressionantes, 
                            tornando as experiências na web não apenas funcionais, mas também esteticamente agradáveis.
                        </p>
                        <p>
                            Além de programador Front-End, sou formado em Técnico de Desenvolvimento de Sistemas. Essa formação
                            ampla e diversificada permitiu que eu compreendesse não apenas a camada superficial do
                            desenvolvimento web, mas também os princípios subjacentes de design de software, algoritmos 
                            e estruturas de dados. Essa perspectiva holística me diferencia e me capacita a abordar os desafios
                            tecnológicos de maneira abrangente.
                        </p>
                            <div className={styles.btnSocial}>
                                <a href='#'><button><i class="bi bi-instagram"></i></button></a>
                                <a href='#'><button><i class="bi bi-tiktok"></i></button></a>
                                <a href='#'><button><i class="bi bi-linkedin"></i></button></a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre