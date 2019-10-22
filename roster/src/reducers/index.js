import { combineReducers } from 'redux'

const playersReducer = () => {
    return [
        {firstName: 'Ganga1', lastName: 'Pathipaka', Age: 36},
        {firstName: 'Ganga2', lastName: 'Pathipaka', Age: 36},
        {firstName: 'Ganga3', lastName: 'Pathipaka', Age: 36},
        {firstName: 'Ganga4', lastName: 'Pathipaka', Age: 36},
        {firstName: 'Ganga5', lastName: 'Pathipaka', Age: 36}
    ];
}

const selectPlayerReducer=(selectPlayer = null, action) => {
    if(action.type === "SELECT_PLAYER") {
        return action.payload;
    }
    return selectPlayer;
}

export default combineReducers({
    players: playersReducer,
    selectPlayer: selectPlayerReducer
});
