import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams(); // Obtiene el ID del profesional
  const { state } = useContext(ContextGlobal); //Obtiene el estado actual
  const [professional, setProfessional] = useState(null); //Inicializa el estado para almacenar los datos

  useEffect(() => {
    fetch(`/api/professionals/${id}`) //Llamada a la API
      .then(response => response.json())
      .then(data => setProfessional(data)); //// Actualiza el estado
  }, [id]);

  if (!professional) return <div className={state.theme}>Loading...</div>;

  return (
    <div className='full-screen-center'> {/* Estilo para centrar el contenido */}
    <div className={`card ${state.theme}`}>
      <Link to={`/professional/${id}`}>
       <h1>Detalle Profesional id {id}</h1>
       <p>Nombre: {professional.name}</p>
       <p>Email: {professional.email}</p>
       <p>Cel: {professional.phone}</p>
       <p>Website: {professional.website}</p>
      </Link>
    </div>
    </div>
  );
};

export default Detail;






