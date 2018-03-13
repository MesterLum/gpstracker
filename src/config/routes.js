import { StackNavigator } from 'react-navigation'
import React from 'react'


//Screens
import loginComponent from '../components/login'
import homeComponent from '../components/home'
import MeComponent from '../components/homeComponets/Me'
import MeComponent2 from '../components/homeComponets/Me2'

import Icon from 'react-native-vector-icons/FontAwesome'

const NavigationHome = StackNavigator({
    "Me": {screen : MeComponent, navigationOptions: {
        title: 'Me',
        headerLeft: <Icon name="chevron-left" size={15} color="blue"/>,
    }},
    "Me2": {screen : MeComponent2}
   
    
})

const Navigation = StackNavigator({
    Login: { screen: loginComponent, navigationOptions : {
        header : null
        
    }},
    Home: { screen: homeComponent, navigationOptions : {
        header : null
        
    }},  
    homeNav: {screen: NavigationHome, navigationOptions : {
        header : null
        
    }}  
    
},
{
    headerMode: 'screen',
})

export default Navigation;