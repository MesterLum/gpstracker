import { StackNavigator } from 'react-navigation'

//Screens
import loginComponent from '../components/login'



const Navigation = StackNavigator({
    Login: { screen: loginComponent, navigationOptions : {
        header : null
        
    }},   
    
},
{
    headerMode: 'screen',
})

export default Navigation;