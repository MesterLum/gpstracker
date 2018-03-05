/*
    This method return day = 1 or night = 0
*/
export const dayOrNigth = () =>{
    let Hour = new Date().getHours()
    return Hour > 18 && !(Hour < 7)?
    0 : 1
}

export const getGeolocationAnimated = (geolocation, callback) => {
    
      geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        callback({latitude, longitude, latitudeDelta: 0.0033, longitudeDelta: 0.0045});
    }
    , err => console.log(err), {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000})
}