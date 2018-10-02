export default (state = {}, action) => {
    console.log(state);
    switch (action.type) {
        case "LOAD_TODOS":
            return {
                result_to: action.payload
            };
        default:
            return state;
    }
};
