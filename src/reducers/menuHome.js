import { CHANGE_STATE_MENU } from '../utils/actionsType'

const initialState = {
    isOpen : false
}

export default (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_STATE_MENU: {
            return{
                ...state,
                isOpen : !state.isOpen

            }
        }
        default:
            return {
                ...state
            }
    }
}
