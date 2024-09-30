import { useContext } from 'react';
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}> {/* Aplica la clase de tema del estado actual */}
      <h1>Profesionales</h1>
      <div className="card-grid"> {/* Contenedor para las tarjetas de profesionales */}
        {state.data.map(professional => (
          <Card key={professional.id} {...professional} /> 
        ))}
      </div>
    </main>
  );
};

export default Home;