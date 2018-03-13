import React, { Component } from 'react';
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
    AsyncStorage,
    Keyboard,
    Animated
} from 'react-native';
import LoginForm from '.././components/forms/loginForm'

import { BACKGROUND_COLOR } from '../../constants'


class Login extends Component{
    constructor(props){
        super(props)
        var buttonLogin = undefined

        this.imageHeight = new Animated.Value(250)
    }

    componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
      }

    keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: 50,
        }).start();
      };
    
      keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
          duration: event.duration,
          toValue: 250,
        }).start();
      };


    render(){
        const { isFetching, error, errorMessage, user } = this.props._loginState
        if (user){
            //TOken user here
            AsyncStorage.setItem('tokenUser', user, () => {
                if (!error){
                    this.buttonLogin.success()
                    const interval = setInterval(()=>{
                        let navigate = NavigationActions.navigate({
                            routeName: 'Home',
                        })
                        this.props.navigation.dispatch(navigate)
                        clearInterval(interval)
                    },2000)
    
                }
            })
        }
        if (error){
            this.buttonLogin.error()
            const interval = setInterval(()=>{
                this.buttonLogin.reset()
                clearInterval(interval)
            },2000)
            
        }
    
        const onClickButton = (user,password, btn) => {
            this.buttonLogin = btn
            this.props.fetchLogin("mesterlum@hotmail.com","palafox88")
        }
    
        return (
            <KeyboardAvoidingView behavior="padding"
             style={styles.container}
             >
                <View style={styles.logo}>
                    <Animated.Image source={require('../../assets/img/logo.png')} 
                    style={[{height: 250, width: 250},{ height: this.imageHeight }]}/>
                    <Text style={{color: 'white', marginLeft: 15, marginRight: 15}}>GPS Tracker, seguimiento en tiempo real de camiones por un precio increible</Text>
                </View>
                <View style={styles.formLogin}>
                    {error && <Text style={{color: 'red', fontSize: 20, textAlign: 'center', marginBottom: 5}}>{errorMessage}</Text>}
                    <View>
                        <LoginForm onClickButton={onClickButton} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
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