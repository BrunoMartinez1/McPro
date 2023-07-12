import React from 'react'
import viejo1 from '../fotos/viejo1.jpg';
import viejo2 from '../fotos/viejo2.jpg';

const Opinion = () => {
  return (
    <div className='noti'>
        <h1 className='titulo'>Premios de los dos pioneros</h1>
        <br/>
        <h2 className='h'>Edwin Catmull </h2>

        <div className='contenedor'>
        <p className='vie1'>Catmull recibió su primer premio en 1993 de parte de la Academia de Artes y Ciencias Cinematográficas (AMPAS, por sus siglas en inglés) por el desarrollo del software PhotoRealistic RenderMan para Pixar. Apenas tres años más tarde, en 1996, volvió a recibir un premio de la misma institución por su contribución al desarrollo de la composición de imagen digital.
En el año 2001, Catmull recibió un Oscar por sus contribuciones al renderizado de motion pictures, y en 2006, se llevó la medalla IEEE John von Neumann por el mismo motivo.  
Ya en 2008, Catmull se hizo con un Gordon E. Sawyer Award por su contribución tecnológica a la industria cinematográfica. Por último, en 2019, recibió un Turing Award junto a Pat Hanrahan por su trabajo pionero en la CGI.
Además de estos premios, Catmull es miembro de la Asociación de Maquinaria Computacional desde 1995, así como de la Academia Nacional de Ingeniería desde el año 2000. Asimismo, desde 2005 es Doctor Honoris Causa en Ingeniería por la Universidad de Utah.
</p>
        <img className='viej1'
        
          src={viejo1}
        
        />
        </div>
        <br/>

        <h2 className='h'>Patrick Hanrahan</h2>
        <div className='contenedor'>

        <img className='viej2'
        
        src={viejo2}

        />
        <p className='vie2'>Patrick Hanrahan ha recibido varios premios y reconocimientos a lo largo de su carrera. Algunos de los más destacados son:

Premio de la Academia de las Artes y las Ciencias Cinematográficas: Hanrahan ha recibido tres premios de la Academia. En 1993 recibió un premio científico y de ingeniería por su trabajo en RenderMan. En 2004, compartió un premio por logros técnicos con Stephen R. Marschner y Henrik Wann Jensen. En 2014, compartió un premio al logro técnico con Matt Pharr y Greg Humphreys por su trabajo en el renderizado basado en la física.
Premio SIGGRAPH Steven A. Coons: En 2003, Hanrahan recibió este premio por sus contribuciones creativas sobresalientes a los gráficos por computadora.
Premio SIGGRAPH al Logro en Gráficos por Computadora: Hanrahan recibió este premio en 1993 por su destacada labor en el campo de los gráficos por computadora.
Premio de Carrera para la Investigación de Visualización: En 2006, Hanrahan recibió este premio del Comité Técnico de IEEE sobre Visualización y Gráficos (VGTC) en la Conferencia de Visualización de IEEE.
Membresías en academias: Hanrahan es miembro de la Academia Nacional de Ingeniería desde 1999, de la Academia Americana de las Artes y las Ciencias desde 2007 y de la Asociación de Maquinaria de Computación desde 2008.
Premios de enseñanza universitaria en Stanford: Hanrahan ha recibido tres premios por su labor docente en la Universidad de Stanford.
Estos son solo algunos de los premios y reconocimientos que Patrick Hanrahan ha recibido en su destacada carrera en el campo de los gráficos por computadora y la renderización
</p>

      </div>

    </div>
  )
}

export default Opinion