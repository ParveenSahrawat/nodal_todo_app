export const simpleAction = () => dispatch => {
    dispatch({
        type : 'SIMPLE_ACTION',
        payload : 'return of simple action',
    })
}