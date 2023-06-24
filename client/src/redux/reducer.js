import { GET_PROP, GET_PROP_BY_ID, POST_PROP_BY_ID  } from "./actions"

const initialState = {
    allProps:[],
    allPropsCopy: [],
    propId:[],
}

console.log(allProps);
export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_PROP: return{
            ...state,
            allProps : action.payload,
            allPropsCopy:action.payload}

        case GET_PROP_BY_ID: return{
            ...state,
            propId : action.payload,
            
        }
        case POST_PROP_BY_ID: return{
            ...state,
        }


        default:
            return state
        }}