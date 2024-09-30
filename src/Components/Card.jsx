import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const { state, addFav, removeFav } = useContext(ContextGlobal);
 
  const isFav = state.favs.some(fav => fav.id === id); // Verifica si el profesional es un favorito

  const handleFavClick = () => { //Clic en el botón de favorito
    if (isFav) {
      removeFav({ id });
    } else {
      addFav({ name, username, id });
    }
  };

  return (
    <div className={`card ${state.theme}`}> {/* Aplica la clase de tema del estado actual */}
      <Link to={`/professional/${id}`}>
        <img 
           src='./images/doctor.jpg' 
           alt="fotoPerfil"
           style={{ width: '150px', height: 'auto', border: '2px solid black' }} />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavClick} className="favButton">  {/* Botón para agregar o eliminar de favoritos */}
        {isFav ? "❤" : "💔"}
      </button>
    </div>
  );
};

export default Card;



