import React from 'react'
import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native'
import Btn from 'react-native-micro-animated-button'

import { Field, reduxForm  } from 'redux-form'
import PropTypes from 'prop-types'


const inputUser = ({input, ...inputProps, meta : {touched, error}}) => {
    

    return (
        <View>
            
            <TextInput
                style={styles.input}
                {...inputProps}
                {...input}
                value={input.value}
                onChangeText={input.onChangeText}
                placeholder='User'
            />
        
        </View>)
}

const inputPassword = ({input, ...inputProps, meta : {touched, error}}) => {

    return (
        <View>
        <TextInput
            style={styles.input}
            {...inputProps}
            {...input}
            value={input.value}
            onChangeText={input.onChangeText}
            secureTextEntry={true}
            placeholder='Password'
            labelStyle={{backgroundColor: 'red'}}
        />
    
        </View>
    )
}

const btnLogin = null
const LoginForm = ({handleSubmit, onClickButton, loginState}) => {

    const submit = ({user, password}) =>{
        onClickButton(user, password, btnLogin)
        
    }
    
    return (
        <View>
            <Field name='user' component={inputUser}/>
            <Field name='password' component={inputPassword}/>
            <View style={{alignItems: 'center'}}>
            <Btn
                label="Ingresar"
                onPress={handleSubmit(submit)}
                ref={ref => (btnLogin = ref)}
                foregroundColor={'#ffffff'}
                backgroundColor={'#515c6d'}
                successIcon="check"
            />
            </View>
        </View>
    ) 
}

LoginForm.prototype = {
    onCLickForLogin : PropTypes.func.isRequired
}
const styles = StyleSheet.create({
    button : {
        marginTop : 8,
        backgroundColor : '#515c6d',
        marginLeft : 80,
        marginRight : 80,
        borderRadius : 20,
        padding : 10,
        marginBottom: 10
    },
    input : {
        marginLeft : 10,
        marginRight : 10,
        marginBottom : 20,
        padding: 10,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 4,
        color: 'white',
        backgroundColor : 'rgba(255, 255, 255, 0.5)'
    },
})

/*const validate = values => {

    const errors = {}
    const { user, password } = values

    errors.user = !user ? 'El usuario es requerido'
    : user.length<6 || user.length>30 ? 'Min car. 6 max 30'
    : undefined

    errors.password = !password ? 'la contraseña es requerida'
    : password.length<3 ? 'Min 3 caracteres'
    : undefined
    
        
    return errors
}*/

export default reduxForm({
    form: 'login'
})(LoginForm)