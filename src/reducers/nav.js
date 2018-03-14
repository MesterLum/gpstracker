import Navigator from '../config/routes';


const initialState = Navigator.router.getStateForAction(Navigator.router.getStateForAction('Home'));

export default (state = initialState, action) =>{
    let nextState = Navigator.router.getStateForAction(action,state);
    return nextState || state;

}