import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles['about-container']}>
      <h1>Sobre mí</h1>
      <img src="https://mi-foto-de-perfil.com" alt="Foto de perfil" />
      <p>Hola! Soy Kevin Axel Lambarry Hernandez, el creador de esta aplicación. Me encanta la programación y el diseño web, y he disfrutado mucho construyendo esta App con React.</p>
      <p>Espero que disfrutes usando esta aplicación tanto como yo he disfrutado construyéndola!</p>
    </div>
  );
}

export default About;
