import { CHANGE_STATE_LAYOUT_HOME } from '../utils/actionsType'

const initialState = 'login'

export default (state = initialState, action) => {
    switch(action.type){
        case CHANGE_STATE_LAYOUT_HOME:
            return action.layout   
            
        default:
            return state
    }
}