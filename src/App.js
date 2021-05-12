import React from 'react' ;
import {Provider} from 'react-redux' ;
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado'
import store from './store';



const App=()=>(
  <Provider store={store}>
  <main>
    <h1>Juanse app</h1>
    <Jugadores/>
    <EquipoSeleccionado/>
  </main>
  </Provider>
)

export default App;
