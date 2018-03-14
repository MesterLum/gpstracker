import React from 'react'
import {
    View,
    StyleSheet,
    Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { dayOrNigth } from '../../utils/utils'

const MenuInMap = props => (
    <View style={styles.styleMenu}>
    <Icon
        name="bars"
        onPress={props.onPressMenuIcon}
        color={dayOrNigth() == 1? 'black' : 'white'}
        size={35}
    />
    <Icon
        name="location-arrow"
        onPress={() => props.getGeolocationAnimated(navigator.geolocation,(coors =>{
            props.mapView.animateToRegion(coors, 3000)
        }))}
        color={dayOrNigth() == 1? 'black' : 'white'}
        size={35}
    />
 </View>
)

const styles = StyleSheet.create({
    styleMenu : {
        marginTop: Platform.OS === 'ios'?25:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 7
    }
})


export default MenuInMap