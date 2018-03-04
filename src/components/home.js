import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Geolocation,
    TouchableHighlight,
    View
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'

import { dispatchGetLocation } from '../actions/maps'



class Home extends Component{

    constructor(props){
        super(props)
        var propsMap = null
        
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
        const Hour = new Date().getHours()
        return Hour > 18 && Hour < 6?
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
                showsUserLocation={true}
                region={coors}
                {...this.propsMap}
                
             >
             </MapView>
             
        )
    }
} 

const styles = StyleSheet.create({
    containerMap : {
        flex : 1,
    },
    navBar: {
        height: 60,
        flexDirection: 'row'
      },
    buttonBack : {
        marginTop : 30,
        marginLeft : 7,
        backgroundColor : 'rgba(255, 255, 255, 0.8)',
        width : 40,
        height : 30,
        borderRadius : 10,
        justifyContent : 'center'
    },
    buttonNext : {
        
        marginTop : 30,
        marginRight : 7,
        backgroundColor : 'rgba(255, 255, 255, 0.8)',
        width : 40,
        height : 30,
        borderRadius : 10,
        justifyContent : 'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)