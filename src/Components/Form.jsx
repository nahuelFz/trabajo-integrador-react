import { useState, useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Form = () => { //Estados
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { state } = useContext(ContextGlobal);

  //Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5) { // Validacion, nombre tenga más de 5 caracteres
      setError('Por favor verifique su información nuevamente');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) { // Validacion, formato correcto del email
      setError('Por favor verifique su información nuevamente');
      return;
    }
    setError('');
    setSuccess(`Gracias ${name}, por comunicarte con nosotros`);
    console.log({ name, email });
  };

  return (
    <div className={state.theme}> {/* Aplica la clase de tema del estado actual */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)} // Actualiza el estado
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
        />
        <button type="submit">Enviar</button> {/* Botón para enviar el formulario */}
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Form;
