import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
    
    //definir el State
    const [presupuesto, guardarPresupuesto]= useState(0);
    const [restante, guardarRestante]= useState(0);
    const [mostrarpregunta, actualizarPregunta]= useState(true);
    const [gastos, guardarGastos] = useState([]);

    //Cuando agreguemos nuevo gasto
    const agregarNuevoGasto = gasto => {
      guardarGastos([
        ...gastos,
        gasto
      ])
    }

    return ( 
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            {mostrarpregunta ? //en caso de true muestra solo para definir presupuesto
            (
              <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
              />
            ) :( //en caso de false muestra que ya se eligio presupuesto y para agregar gasto
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}

                  />
                </div>
              </div>
            ) }
            

            
          </div>

          
        </header>


      </div>
    
    );
}

export default App;