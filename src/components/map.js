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
import { dayOrNigth } from '../utils/utils'
import MenuInMap from './map/menuInMap'

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
        console.log(this.props)
        return (
            <MapView
                style={styles.containerMap}
                showsUserLocation={true}
                followsUserLocation={true}
                region={coors}
                ref={ref => { this.mapView = ref }}
                {...this.propsMap}
                
             >
             <MenuInMap
              getGeolocationAnimated={this.props.getGeolocationAnimated}
              onPressMenuIcon={this.props.onPressMenuIcon}
              mapView={this.mapView}
              />
             </MapView>
             
        )
    }
} 

const styles = StyleSheet.create({
    containerMap : {
        flex : 1,
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