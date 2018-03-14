import { CHANGE_STATE_LAYOUT_HOME } from '../utils/actionsType'

function actionChangeStateLayout(layout){
    return{
        type: CHANGE_STATE_LAYOUT_HOME,
        layout
    }
}

export function dispatchChangeStateLayout(layout){
    return (dispatch) => dispatch(actionChangeStateLayout(layout))
}