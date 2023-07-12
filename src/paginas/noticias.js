import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import viejos from '../fotos/viejos.png';
import celi from './celia';
import './funcion';


const noticias = () => {
  return ( 
    <div>
      <div className='noti'>
        <h1 className="titulo">
          Dos pioneros de Pixar, Edwin Catmull y Patrick Hanrahan, reciben el Premio Turing
        </h1>
        <h8>Publicado el 19 marzo, 2020 por <Link to="/celi"> Celia Valdeolmillos </Link>  </h8>
        <a href="https://twitter.com/muycomputerpro" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <br />
        <br />

        <img className='vie' src={viejos} />


        <p className='texton'>La <span className='negrita'>ACM </span>(Asociación de maquinaria de computación) <span className='sub'> ha otorgado </span> el <span className='negrita'>Premio Turing </span> correspondiente al 2019, que en esta ocasión ha recaído en dos pioneros de la animación:<span className='negrita'> Edwin E. Catmull y Patrick H. Hanrahan </span>, por sus «contribuciones de enorme importancia para la computación«. Ambos han trabajado para <span className='negrita'> Pixar </span>, donde llevaron a cabo los avances por los que han recibido el premio, dotado con un millón de dólares, y considerado como el <span className='negrita'> Premio Nóbel de informática. </span></p>
        <br></br>
        <p className='texton'>Catmull es un <span className='negrita'> antiguo presidente de Pixar </span> y de los estudios de animación de Disney. Por su parte, Hanrahan es uno de los trabajadores de Pixar que fundaron el estudio de animación. En la actualidad es uno de los profesores del <span className='negrita'> Laboratorio de Gráficos por ordenador </span> de la <span className='negrita'> Universidad de Stanford. </span> </p>
        <br></br>
        <p className='texton'>Los dos han recibido el <span className='sub'> Premio Turing </span> por sus <span className='negirta'> contribuciones a los gráficos 3D por ordenador </span>, y por el impacto que estas contribuciones han tenido en el CGI en el rodaje de películas, entre otros casos de uso. Según la ACM, el trabajo de ambos ha llevado a la aparición de un nuevo género de películas de animación, que comenzaron con Toy Story hace ya 25 años.</p>
        <br></br>
        <p className='texton'>Las técnicas desarrolladas por ambos siguen siendo una parte integral del proceso de CGI tal como se hace en la actualidad. Según la ACM, además de en el rodaje de películas, las técnicas de Catmull y Hanrahan se utilizan también en áreas y sectores como la gestión de centros de datos y en Inteligencia Artificial</p>
        <br></br>
        <p className='texton'><span className='negrita'>Cherri Pancake, Presidenta de la ACM </span>, ha subrayado que «<i>el CGI ha transformado la manera en que se ruedan y disfrutan las películas, al mismo tiempo que ha generado un impacto profundo en la industria del ocio. Estamos especialmente felices de reconocer a Pat Hanraham y Ed Catmull, porque la comunidad de gráficos por ordenador es una de las mayores y más dinámicas de ACM, como queda patente en la conferencia anual ACM SIGGRAPH</i>«.</p>
        <br></br>
        <p className='texton'>Pancake también ha señalado que las contribuciones de Catmull y Hanrahan demuestran que los avances en una especialidad de la computación puede tener una influencia significativa en otras áreas del sector. La Presidenta de la ACM ha señalado como ejemplo, de esto el trabajo de Hanrahan con lenguajes de matices para GPUs ha llevado a su uso como motores de computación de propósito general para una amplia variedad de áreas. Entre ellas, en la computación de alto rendimiento.</p>
        <br></br>
      </div>







    </div>





  )
}

export default noticias