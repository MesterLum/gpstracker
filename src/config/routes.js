import { StackNavigator } from 'react-navigation'
import React from 'react'


//Screens
import homeComponent from '../components/layoutHome'
import personalComponent from '../components/homeComponets/personal'
import MeComponent2 from '../components/homeComponets/Me2'

import Icon from 'react-native-vector-icons/FontAwesome'


const Navigation = StackNavigator({
    Home: {screen: homeComponent, navigationOptions : {
        header : null
    }},
    Personal: {screen: personalComponent} 
    
},
{
    headerMode: 'screen',
})

export default Navigation;