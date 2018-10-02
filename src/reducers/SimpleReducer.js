export default (state = {}, action) => {
    switch (action.type) {
        case "LOAD_ALBUMS":
            let temp = Object.keys(action.payload).map(i => action.payload[i]);
            let result = state.result
                ? Object.keys(state.result).map(i => state.result[i])
                : [];

            return {
                result: temp.concat(result)
            };
        case "REMOVED_ALBUMS":
            let albums = state.result;
            let res = albums.filter(el => {
                return el.id != action.payload.id;
            });

            return {
                result: res
            };
        default:
            return state;
    }
};
