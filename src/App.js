import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div>
      <section >
        <h2 id='NombreEmpresa'>InnovarMotor: Potencia, rendimiento, excelencia</h2>
      </section>

      <div class="imagenPrin">
        <img id="tamaño2" src="imagen1.jpg"></img>
      </div>

      <section className='separador'>
        <div className='nosotros'>
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una empresa dedicada a la fabricación de automóviles con una sólida trayectoria en 
            la industria. Contamos con un equipo de profesionales altamente capacitados y apasionados 
            por la ingeniería, el diseño y la innovación. Nuestro compromiso es ofrecer vehículos que 
            combinen elegancia, rendimiento y seguridad, incorporando los últimos avances tecnológicos y 
            respetando los más altos estándares de calidad.
            <br></br>
            <br></br>
            En nuestra empresa, fomentamos un entorno de trabajo colaborativo y orientado a la excelencia. 
            Valoramos la creatividad, la integridad y la dedicación de nuestro equipo, y promovemos el desarrollo 
            profesional y personal de cada uno de nuestros empleados. Nos enorgullece el impacto positivo que 
            generamos en la sociedad, al proporcionar soluciones de movilidad que mejoran la vida de las personas 
            y contribuyen a la protección del medio ambiente.
            <br></br>
            <br></br>
            Como empresa, nos esforzamos por mantener relaciones sólidas y a largo plazo con nuestros clientes, 
            proveedores y socios estratégicos. Creemos en la importancia de la transparencia, la honestidad y el 
            servicio excepcional, y nos esforzamos por superar las expectativas en cada interacción. Nuestro 
            compromiso con la calidad y la satisfacción del cliente impulsa cada aspecto de nuestro negocio, 
            desde la investigación y desarrollo hasta la producción y el servicio postventa.
            <br></br>
            <br></br>
            Finalmente, somos una empresa automotriz comprometida con la excelencia, la innovación y la sostenibilidad.
            Nuestro enfoque se centra en el diseño y fabricación de vehículos de alta calidad que cumplan con 
            las necesidades y deseos de nuestros clientes, mientras trabajamos para construir un futuro de
            movilidad inteligente y respetuoso con el medio ambiente.
            
          </p>
        </div>
      </section>

      <section className='separador'>
        <div class="mision">
          <h2>Visión</h2>
          <p>Nuestra visión es convertirnos en líderes de la industria automotriz, reconocidos a nivel global por 
            nuestro compromiso con la excelencia en diseño, rendimiento y sostenibilidad. Aspiramos a ser una marca 
            preferida por los consumidores, conocida por su calidad, confiabilidad y responsabilidad ambiental. 
            Buscamos impulsar el cambio en la industria, liderando la adopción de tecnologías limpias y promoviendo 
            un futuro de movilidad inteligente y respetuosa con el medio ambiente.
          </p>
        </div>
        <div class="vision">
          <h2>Msisión</h2>
          <p>Nuestra misión es diseñar y fabricar vehículos de alta calidad que superen las expectativas de 
            nuestros clientes y brinden soluciones de movilidad seguras, eficientes y sostenibles. Nos esforzamos 
            por ofrecer productos innovadores y tecnológicamente avanzados que contribuyan al progreso y bienestar 
            de la sociedad.
          </p>
        </div>
      </section>
      <section class="separador">
        <h2>Contáctenos</h2>
          <ul>
            <div class="centro">
              <a href="https://www.facebook.com" target="_blank">
                <img id="tamaño" src="facebook.png"></img> </a>
              <a href="https://accounts.google.com/" target="_blank">
                <img id="tamaño" src="gmail.png"></img></a>
              <a href="https://web.whatsapp.com/" target="_blank">
                <img id="tamaño" src="whatsapp.png"></img></a>
              <a href="https://www.instagram.com/" target="_blank">
                <img id="tamaño" src="instagram.png"></img></a>
             
              
            </div>
          </ul>
      </section>
    </div>
  );
}

export default App;
