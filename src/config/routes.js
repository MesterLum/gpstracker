import { StackNavigator } from 'react-navigation'

//Screens
import loginComponent from '../components/login'
import homeComponent from '../components/home'


const Navigation = StackNavigator({
    Login: { screen: loginComponent, navigationOptions : {
        header : null
        
    }},
    Home: { screen: homeComponent, navigationOptions : {
        header : null
        
    }},    
    
},
{
    headerMode: 'screen',
})

export default Navigation;