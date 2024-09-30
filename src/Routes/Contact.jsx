import { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme}>  {/* Aplica la clase de tema del estado actual */}
      <h2>Para Contactarnos:</h2>
      <p>Responderemos sus consultas a la brevedad</p>
      <Form />
    </div>
  );
};

export default Contact;