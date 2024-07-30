import React, {useState} from 'react';
import PropsScreenView from './PropsScreenView';

/**
 * Componente Contenedor. Este componente maneja el estado y pasa los accesorios
 * al componente de presentacion
 **/

const initText =
  'No hay nadie que ame el dolor mismo, que lo busque y lo quiera tener, simplemente porque es el dolor...';

const PropsScreenContainer = () => {
  const [myState, setMyState] = useState(initText);

  const updateStateHandler = newText => {
    setMyState(
      newText === 'Estado actualizado..' ? initText : 'Estado actualizado..',
    );
  };

  return <PropsScreenView value={myState} onUpdate={updateStateHandler} />;
};

export default PropsScreenContainer;
