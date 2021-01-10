import React, {useState} from 'react';
import Error from './Error';

const Formulario = () => {

    //state
    const [nombre, guardarNombre ]= useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
 
    //cuando el user agrega un gasto

    const agregarGasto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        //en caso de que pase la validacion ahora el error es false
        guardarError(false);
        //construir el gasto

        //pasar el gasto al componente principal

        //reset form
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
                    value = {cantidad}
                    onChange= {e=> guardarCantidad(parseInt( e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
     );
}
 
export default Formulario;
