import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_ERROR = "EDIT_ERROR"

export const fetchSmurfs = () => (dispatch)=>{
    dispatch({type: FETCHING_START});
    axios.get('http://localhost:3333/smurfs')
        .then((res =>{
            //console.log('smurf api data:', res.data);
            dispatch({type: FETCHING_SUCCESS, payload: res.data})
        }))
        .catch(err =>{
            console.log(err);
            dispatch({type: FETCHING_FAILURE, payload: err})
        })
}

export function addSmurf(newSmurf) {
    return {
        type: ADD_SMURF,
        payload: newSmurf,
    };
}

export function errorEdit(newError){
    return {
        type: EDIT_ERROR,
        payload: newError,
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.