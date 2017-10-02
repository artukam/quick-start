const DEFAULT_STATE = {
    state: {}
}

export default (state=DEFAULT_STATE, action={type:null}) => {
    switch(action.type){
        case 'persist/REHYDRATE':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
