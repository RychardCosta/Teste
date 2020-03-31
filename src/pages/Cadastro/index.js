import React from 'react';

import './styles.css'
import { Link } from 'react-router-dom';

export default function Register() {
return (
    
    <div className="formulario-container">

    
    <section className='carteira'>
        <select name="tipo-de-carteira">
        <option>Carteira tipo A</option>
        <option>Carteira tipo B</option>
        <option>Carteira tipo C</option>
        <option>Carteira tipo D</option>
        <option>Carteira tipo E</option>
        </select>

    </section>



  

    <form className="documentos">
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Endereço"/>
        <input type="text" placeholder="CPF"/>
        <input type="text" placeholder="Telefone"/>


        <button>
            <Link to='/sucesso'>Cadastrar</Link>
        </button>
    </form>

    </div>
    



);

}