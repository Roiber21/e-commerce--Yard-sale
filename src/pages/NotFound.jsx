import React from 'react'
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
       <section className='container'>
           <div className='error_burbuja'>
              <h1>404 Error</h1>  
           </div>
           <h2>Upps not found</h2>
           <p>lo sentimos no encontramos la pagina, pero puedes...</p>
           <div className='boton_home'>
               <a href="">Back Home</a>
           </div>
           
       </section>
    );
}

export default NotFound;