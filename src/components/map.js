import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Geolocation,
    TouchableHighlight,
    View,
    Platform
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import { dispatchGetLocation } from '../actions/maps'
import { dayOrNigth, getGeolocationAnimated } from '../utils/utils'



class Map extends Component{

    constructor(props){
        super(props)
        var propsMap = null
        var mapView = null
        
    }

    componentDidMount() {
        //Get Hour For MapStyle
        this.propsMap = this.getHourForMapStyle()
        this.props.mapUpdate(navigator.geolocation)
    }

    static navigationOptions = {
        headerStyle : {
            backgroundColor : 'transparent'
        }
    }

    /*
        This method
    */
    getHourForMapStyle(){
        return dayOrNigth() == 0?
            {
                provider : PROVIDER_GOOGLE,
                customMapStyle : require('../utils/mapStyle').NIGTH
            }
            :
            {
                provider : PROVIDER_GOOGLE,
                customMapStyle : require('../utils/mapStyle').DAY
            }
    }

    render() {
        
        const { coors } = this.props.mapCors
        return (
            <MapView
                style={styles.containerMap}
                showsUserLocation
                followsUserLocation
                region={coors}
                ref={ref => { this.mapView = ref }}
                {...this.propsMap}
                
             >
             <View style={styles.styleMenu}>
                <Icon
                    name="bars"
                    onPress={this.props.onPressMenuIcon}
                    color={dayOrNigth() == 1? 'black' : 'white'}
                    size={35}
                />
                <Icon
                    name="location-arrow"
                    onPress={() => getGeolocationAnimated(navigator.geolocation,(coors =>{
                        this.mapView.animateToRegion(coors, 3000)
                    }))}
                    color={dayOrNigth() == 1? 'black' : 'white'}
                    size={35}
                />
             </View>
             </MapView>
             
        )
    }
} 

const styles = StyleSheet.create({
    containerMap : {
        flex : 1,
    },
    styleMenu : {
        marginTop: Platform.OS === 'ios'? 30 : 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 7
    }
})

function mapStateToProps(state) {
    return {
        mapCors : state.map
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapUpdate : (navigator) => dispatch(dispatchGetLocation(navigator))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)