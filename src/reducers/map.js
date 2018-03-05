import { MAPS_UPDATE_LOCATION } from '../utils/actionsType'

const initialState = {
    coors : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0221,
      }
}

export default (state = initialState, action) =>{

    switch(action.type){
        case MAPS_UPDATE_LOCATION:{
            return {
                ...state,
                coors : action.coors
            }
        }
        default:
            return state;
    }

}