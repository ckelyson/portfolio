import './Formulario.css'

function Formulario () {
    return (
        <section id='contato' className='formulario'>
            <div className='interface'>
                <h2 className='titulo'>FALE <span>COMIGO!</span></h2>

                <div className='linha'>
                    <p><i class="bi bi-envelope-fill"></i> <a href='mailto:ckelyson777@gmail.com'>ckelyson777@gmail.com</a></p>
                    <p><i class="bi bi-whatsapp"></i> <a href='https://wa.me/5581993332044'>whatsapp</a></p>
                    <p><i class="bi bi-instagram"></i> <a href='https://instagram.com/mouraa_ckelyson?igshid=MzRlODBiNWFlZA=='>instagram</a></p>
                </div>
            </div>
        </section>
    )
}

export default Formulario