let reducers = (state, action) => {
    switch (action.type) {
        case "test":
            return Object.assign(state, {
                adminHotList: action.data
            });
        default :
            return state;
    }
};

export default reducers;