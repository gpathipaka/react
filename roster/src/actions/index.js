
export const selectPlayer = (player) => {
    return({
        type: 'SELECT_PLAYER',
        payload: player
    });
}