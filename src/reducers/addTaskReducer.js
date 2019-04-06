const initialstate = {};

export default (state=initialstate, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state, tasks : action.payload }
        default : 
            return state
    }
}