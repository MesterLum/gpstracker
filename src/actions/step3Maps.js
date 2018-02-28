import { MAPS_UPDATE_LOCATION } from '../utils/actionsType'

function actionMapUdate(coors){
    return {
        type : MAPS_UPDATE_LOCATION,
        coors
    }
}

export function dispatchGetLocation(geolocation){

    return (dispatch) => {
        geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords
            dispatch(actionMapUdate({latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}));
        }
            , err => console.log(err), {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000})
    }
}