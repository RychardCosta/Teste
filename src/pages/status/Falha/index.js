import React from 'react';
import {Link} from 'react-router-dom'

export default function Falha(){
    return(
        <div>
        <h1>Algum erro ai fera</h1>

        <button>
            <Link to='/'>Voltar</Link>
        </button>
        
        </div>
    );
}