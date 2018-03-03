import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import { dispatchLogin } from '../actions/login'

import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import LoginForm from '.././components/forms/loginForm'

import { BACKGROUND_COLOR } from '../../constants'

const Login = (props) => {  
    
    const { isFetching, error, errorMessage, user } = props._loginState
    if (user || true){
        //TOken user here
        AsyncStorage.setItem('tokenUser', user, () => {
            if (!error){
                let navigate = NavigationActions.navigate({
                    routeName: 'Home',
                })
                props.navigation.dispatch(navigate)
            }
        })


    }

    return (
        <KeyboardAvoidingView behavior="padding"
         style={styles.container}
         >
            <View style={styles.logo}>
                <Image source={require('../../assets/img/logo.png')} />
                <Text style={{color: 'white', marginLeft: 15, marginRight: 15}}>GPS Tracker, seguimiento en tiempo real de camiones por un precio increible</Text>
            </View>
            <View style={styles.formLogin}>
                {error && <Text style={{color: 'red', fontSize: 20, textAlign: 'center', marginBottom: 5}}>{errorMessage}</Text>}
                <View>
                    {!isFetching && <LoginForm onCLickForLogin={props.fetchLogin}/>}
                    {isFetching && <Text>Cargando</Text>}
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
    


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: BACKGROUND_COLOR
    },
    label : {
        textAlign : 'center',
        marginBottom : 100,
        marginTop : 30,
        fontSize : 40,
        color : 'white',

    },
    logo: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(state){
    return {
        _loginState : state.login
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchLogin : (user, password) =>  dispatch(dispatchLogin(user, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);