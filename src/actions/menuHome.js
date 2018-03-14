import { CHANGE_STATE_MENU, PICK_ROUTS_VIEW } from '../utils/actionsType'

function actionChangeStateMenu(){
    return {
        type : CHANGE_STATE_MENU
    }
}

function actionPickRoutsView(bool){
    return{
        type: PICK_ROUTS_VIEW,
        bool
    }
}

export const dispatchChangeStateMenu = () => dispatch => dispatch(actionChangeStateMenu())
export const dispatchPickRoutsView = (bool) => dispatch => dispatch(actionPickRoutsView(bool))