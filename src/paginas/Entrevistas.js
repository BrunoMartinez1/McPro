import React from 'react'
import Toast from 'react-bootstrap/Toast';

const Entrevistas = () => {
  return (
    <div className='noti'>
      <h1 className='titulo2'>Actualidad</h1>
      <br />
      <Toast className='ml-auto'>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Edwin Catmull</strong>
          <small>Ahora</small>
        </Toast.Header>
        <Toast.Body className='e1'>Edwin Earl Catmull (nacido en 1945 en Virginia Occidental) es un científico de la computación estadounidense retirado y expresidente de Pixar y Walt Disney Animation Studios. Como científico de la computación, Catmull ha contribuido a muchos avances importantes en los gráficos 3D por computadora..</Toast.Body>
      </Toast>

      <br/>
      <br/>
      <br/>

      <Toast className='mr-auto'>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Patrick Hanrahan</strong>
          <small>Ahora</small>
        </Toast.Header>
        <Toast.Body className='e1'>Actualmente es profesor Canon de Ciencias de la Computación e Ingeniería Eléctrica en la Universidad de Stanford y su investigación actual incluye sistemas de visualización, síntesis de imágenes y gráficos y arquitecturas.</Toast.Body>
      </Toast>
      
      <br/>
      <br/>
      <br/>

    </div>
  )
}

export default Entrevistas