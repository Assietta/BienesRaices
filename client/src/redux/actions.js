export const GET_PROP = "GET_PROP"


export function getAllProperties(){
    return async function (dispatch){
        try {
            const response = await axios.get("/realState");
            console.log(response);
            dispatch({
                type: GET_PROP,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting realStateHandler", error);
        }
    }
}



