import axios from "axios";

export const loadAlbums = () => {
    return async dispatch => {
        const res = await axios.get("http://reduxblog.herokuapp.com/api/posts");
        const action = {
            type: "LOAD_ALBUMS",
            payload: res.data
        };

        dispatch(action);
    };
};

export const loadTodos = () => {
    return async dispatch => {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const action = {
            type: "LOAD_TODOS",
            payload: res.data
        };

        dispatch(action);
    };
};

export const removeAlbums = id => {
    return dispatch => {
        const action = {
            type: "REMOVED_ALBUMS",
            payload: {
                id
            }
        };
        dispatch(action);
    };
};
