import React from 'react'
import {
    View,
    TextInput,
    TouchableHighlight,
    Text,
    StyleSheet,
    Abov
} from 'react-native'

import { Field, reduxForm  } from 'redux-form'
import PropTypes from 'prop-types'


const inputUser = ({input, ...inputProps, meta : {touched, error}}) => {
    
    const existsErr = touched && error !== 'undefined'

    return (
        <View>
            {existsErr && <Text style={{textAlign : 'center', color: 'red'}}>{error}</Text>}
            <TextInput
                style={styles.input}
                {...inputProps}
                {...input}
                value={input.value}
                onChangeText={input.onChangeText}
                placeholder='Usuario'
            />
        
        </View>)
}

const inputPassword = ({input, ...inputProps, meta : {touched, error}}) => {

    const existsErr = touched && error !== 'undefined'
    return (
        <View>
        {existsErr && <Text style={{textAlign : 'center', color: 'red'}}>{error}</Text>}
        <TextInput
            style={styles.input}
            {...inputProps}
            {...input}
            value={input.value}
            onChangeText={input.onChangeText}
            secureTextEntry={true}
            placeholder='Usuario'
        />
    
        </View>
    )
}




const LoginForm = ({handleSubmit, onCLickForLogin}) => {

    const submit = ({user, password}) =>{
        onCLickForLogin(user, password)
        
    }
    
    return (
        <View>
            <Field name='user' component={inputUser}/>
            <Field name='password' component={inputPassword}/>
            <TouchableHighlight style={styles.button} onPress={handleSubmit(submit)}>
                <Text style={{textAlign : 'center', color: 'white', fontSize : 17}}>Login</Text>
            </TouchableHighlight>
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

const validate = values => {

    const errors = {}
    const { user, password } = values

    errors.user = !user ? 'El usuario es requerido'
    : user.length<6 || user.length>30 ? 'Min car. 6 max 30'
    : undefined

    errors.password = !password ? 'la contraseña es requerida'
    : password.length<3 ? 'Min 3 caracteres'
    : undefined
    
        
    return errors
}

export default reduxForm({
    form: 'login',
    validate
})(LoginForm)