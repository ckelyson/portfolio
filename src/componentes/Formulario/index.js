import './Formulario.css'
import './envia.php'

function Formulario () {
    return (
        <section className='formulario'>
            <div className='interface'>
                <h2 className='titulo'>FALE <span>COMIGO!</span></h2>

                <form mathod='post' action='envia.php'>
                    <input name='nome' type='text' placeholder='Seu nome completo:' required/>
                    <input name='email' type='text' placeholder='Seu email:' required/>
                    <input name='telefone' type='text' placeholder='Seu celular:' required/>
                    <textarea placeholder='Sua mensagem' required></textarea>
                    <div className='btnEnviar'><input type='submit' value='ENVIAR'/></div>
                </form>
            </div>
        </section>
    )
}

export default Formulario