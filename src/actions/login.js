import { LOGIN_FETCH, LOGIN_FETCH_SUCCES, LOGIN_FETCH_ERR } from '../utils/actionsType';
import { URL_API, getHeaders } from '../../constants'
function actionLogin() {
    return {
        type : LOGIN_FETCH
    }
}

function actionLoginSucces(user) {
    return {
        type : LOGIN_FETCH_SUCCES,
        user
    }
}

function actionLoginErr(errorMessage) {
    return {
        type : LOGIN_FETCH_ERR,
        errorMessage
    }
}

export function dispatchLogin(user, password){

    return (dispatch) => {
        dispatch(actionLogin())
        fetch(`${URL_API}/api/users/login`, {method : 'POST', headers : getHeaders(),
        body : JSON.stringify({user: 'mesterlum',password: 'palafox88'})})
        
        .then(res => {
            
            if (res.status == 400)
                res.json().then(res => dispatch(actionLoginErr(res.message)))
            else if(res.status == 500)
                res.json().then(res => dispatch(actionLoginErr(res.message)))
            else if(res.status == 404)
                res.json().then(res => dispatch(actionLoginErr(res.message)))
            
            //Login Succes
            else if(res.status == 200)
                res.json().then(res => dispatch(actionLoginSucces(res.user)))
        })
        .catch(err => dispatch(actionLoginErr('Error en login, intentelo mas tarde')))
        
    }
}