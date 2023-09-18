import styles from './MinhasEspecialidades.module.css'

function MinhasEspecialidades () {
    return (
        <section id='especialidades' className={styles.especialidades}>
            <div className={styles.interface}>
                <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>
                <div className={styles.flex}>

                    <div className={styles.especialidadesBox}>
                        <i class="bi bi-filetype-html"></i>
                        <h3>HTML</h3>
                        <p>Em um mundo cada vez mais digital, a linguagem de marcação HTML
                           se destaca como o alicerce essencial que sustenta a internet tal como a conhecemos.
                           Por trás de cada site, aplicativo da web ou e-mail que você acessa, está um código HTML
                           meticulosamente desenvolvido por especialistas.
                        </p>
                    </div>

                    <div className={styles.especialidadesBox}>
                        <i class="bi bi-filetype-css"></i>
                        <h3>CSS</h3>
                        <p>No cenário em constante evolução do desenvolvimento web, o domínio de CSS
                           (Cascading Style Sheets) desempenha um papel crucial na
                           criação de experiências de usuário envolventes e esteticamente agradáveis.
                           Meu amor pelo design e paixão pela web me levaram a aprofundar meus conhecimentos nessa linguagem que é a espinha dorsal da apresentação 
                           visual de websites e aplicativos. CSS permite que eu possa dar vida a layouts, transformando 
                           conceitos em designs elegantes e funcionais.
                        </p>
                    </div>

                  
                </div>
                <div className={styles.flex}>
                <div className={styles.especialidadesBox}>
                        <i class="bi bi-filetype-js"></i>
                        <h3>JAVA SCRIPT</h3>
                        <p>
                        Java-Script é a linguagem que dá vida aos sites e aplicativos, tornando-os interativos, dinâmicos e funcionais.
                        Sou apaixonado por programação, e minha jornada me fez se aprofundar na arte de programar em Java-Script.
                        Ele é um virtuose na criação de experiências de usuário que vão além do comum, tornando cada interação na web uma jornada memorável.
                        </p>
                    </div>
                    
                    <div className={styles.especialidadesBox}>
                        <i class="bi bi-filetype-jsx"></i>
                        <h3>REACT JSX</h3>
                        <p>
                            Em um cenário de desenvolvimento web em constante evolução, o React JSX se destaca como uma das tecnologias mais poderosas para a construção
                            de interfaces de usuário dinâmicas e altamente interativas.
                            Minha paixão por programação me fez possuir uma afinidade especial com o React JSX. Minha jornada no mundo do
                            desenvolvimento web me levou a dominar essa biblioteca JavaScript que é amplamente reconhecida por sua eficiência e
                            flexibilidade na criação de componentes reutilizáveis para aplicações web modernas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MinhasEspecialidades