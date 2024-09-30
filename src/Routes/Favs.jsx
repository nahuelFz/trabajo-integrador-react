import { useContext } from 'react';
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}> {/* Aplica la clase de tema del estado actual */}
      <h1>Doctores Favoritos</h1>
      <div className="card-grid"> {/* Contenedor para las tarjetas de doctores favoritos */}
        {state.favs.map(professional => (
          <Card key={professional.id} {...professional} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

 
