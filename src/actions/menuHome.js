import { CHANGE_STATE_MENU } from '../utils/actionsType'

function actionChangeStateMenu(){
    return {
        type : CHANGE_STATE_MENU
    }
}

export const dispatchChangeStateMenu = () => dispatch => dispatch(actionChangeStateMenu())