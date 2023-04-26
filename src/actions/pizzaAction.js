import axios from "axios"

export const getAllPizzas=()=> async dispatch=>{

    dispatch({type:'GET_PIZZAS_REQUEST'})

    try {
const responce = await axios.get('/api/pizzas/getallpizzas')
console.log(responce);
dispatch({type:'GET_PIZZAS_SUCCESS', payload:responce.data})

    } catch(error) {
        dispatch({type:'GET_PIZZAS_FAILED', payload:error})

    }

}