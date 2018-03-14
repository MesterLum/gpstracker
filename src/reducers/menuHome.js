import { CHANGE_STATE_MENU, PICK_ROUTS_VIEW } from '../utils/actionsType'

const initialState = {
    isOpen : false,
    routsView : false
}

export default (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_STATE_MENU: {
            return{
                ...state,
                isOpen : !state.isOpen
            }
        }
        case PICK_ROUTS_VIEW: {
            return {
                ...state,
                routsView : action.bool
            }
        }
        default:
            return {
                ...state
            }
    }
}
