import axios from "axios";
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const PUSH_SMURF_SUCCESS = "PUSH_SMURF_SUCCESS";

export const UPDATE_ERROR = "UPDATE_ERROR";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF_START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log("SunnyDay", res);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("RainyDay", err.message);
        dispatch({ type: FETCH_SMURF_FAILURE, payload: err.Response });
      });
  };
};

export const pushData = (name, position, nickname, description) => {
  const newSmurf = {
    id: new Date(),
    name: name,
    position: position,
    nickname: nickname,
    description: description,
  };
  return { type: PUSH_SMURF_SUCCESS, payload: newSmurf };
};

// export const pushData = (updateSmurfData) => {
//   return (dispatch) => {
//     axios
//       .post("http://localhost:3333/smurfs", updateSmurfData)
//       .then((res) => {
//         dispatch({ type: PUSH_SMURF_SUCCESS, payload: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch({ type: PUSH_SMURF_FAILURE, payload: err.Response });
//       });
//   };
// };

export const updateError = () => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ERROR });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
