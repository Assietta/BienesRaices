import { GET_PROP } from "./actions"

const initialState{
    allProps:[],
    allPropsCopy: []
}


export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_GAMES: return{
            ...state,
            allProps : action.payload,
            allPropsCopy:action.payload}
        
        default:
            return state
        
        
        }}