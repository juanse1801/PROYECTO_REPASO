import {createStore} from "redux" ;

const initialState={
    jugadores:[{
        id:1,
        nombre: "Juan Sebastian"
    },{
        id:2,
        nombre: "Juan Camilo"
    },{
        id:3,
        nombre: "Jose Manrique"
    },{
        id:4,
        nombre: "Sebastian Borbon"
    },{
        id:5,
        nombre: "Fabian pandapa"
    }],
    titulares:[],
    suplentes:[]

}

const reducerEntrenador = (state=initialState,action) =>{
    if (action.type==="AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores:state.jugadores.filter(j=>j.id!==action.jugador.id)
        }
    }

    if (action.type==="AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes:state.suplentes.concat(action.jugador),
            jugadores:state.jugadores.filter(j=>j.id!==action.jugador.id)
        }
    }

    if (action.type==="QUITAR_TITULAR"){
        return{
            ...state,
            titulares:state.titulares.filter(j=>j.id !== action.jugador.id),
            jugadores:state.jugadores.concat(action.jugador)
        }
    }

    if(action.type==="QUITAR_SUPLENTE"){
        return{
            ...state,
            titulares:state.titulares.filter(j=>j.id !==action.jugador.id),
            suplentes:state.suplentes.concat(action.jugador)
        }
    }
    return state
}

export default createStore(reducerEntrenador)