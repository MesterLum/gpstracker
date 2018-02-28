import { LOGIN_FETCH, LOGIN_FETCH_SUCCES, LOGIN_FETCH_ERR } from '../utils/actionsType';

const initialState = {
    user : '',
    isFetching : false,
    error : false,
    errorMessage : ''
}

export default (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_FETCH : {
            return {
                ...state,
                user : '',
                isFetching : true,
                error : false,
                errorMessage : ''
            }
        }
        case LOGIN_FETCH_SUCCES: {
            return {
                ...state,
                user : action.user,
                isFetching : false,
                error : false,
                errorMessage : ''
            }
        }
        case LOGIN_FETCH_ERR: {
            return {
                ...state,
                user : '',
                isFetching : false,
                error : true,
                errorMessage : action.errorMessage
            }
        }
        default :
            return state
    }
}