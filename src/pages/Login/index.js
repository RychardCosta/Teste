import React from 'react';

import {Link} from 'react-router-dom';


import './styles.css'

export default function Login() {

        

return (

<div className="login-container">
    
    <section className="dados">
    <p>E-mail</p>
    <input type="email" className="E-mail" id='email-login'/>
    </section>


    <button type='submit'>
        <Link  to='/register'>Go</Link>
    </button>

    

</div>
    


);

}