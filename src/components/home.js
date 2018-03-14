import React, {Component} from 'react'
import {
    AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'
import { NavigationActions } from 'react-navigation'
import { dispatchChangeStateMenu, dispatchPickRoutsView } from '../actions/menuHome'

import Map from './map'
import Menu from './menuHome'

class Home extends Component {

    constructor(props){
        super(props)
        this.isRout = false
        this.onClickMenu = this.onClickMenu.bind(this)
    }

    onClickMenu(item){
        if (item === 'Routs'){
            this.props.onPressRoutView(true)
        }
        else{
            let navigate = NavigationActions.navigate({
                routeName: item,
                })
            this.props.navigation.dispatch(navigate)
        }

        
    }
    componentDidMount(){
        AsyncStorage.getItem('tokenUser', (err, user) => err? this.props.changeLayout('login'): !user? this.props.changeLayout('login'):undefined)
    }

    render(){
        
        const menu = <Menu onClickMenu={this.onClickMenu}/>
        return(
            <SideMenu
            isOpen={this.props.isOpenMenu}
            menu={menu}
            >
            <Map onPressMenuIcon={this.props.onPressMenu} isViewRouts={this.props.isOpenRoutView}/>
            </SideMenu>
        )
    }
}

function mapStateToProps(state){
    return{
        isOpenMenu : state.menuHome.isOpen,
        isOpenRoutView : state.menuHome.routsView
    } 
}

function mapDispatchToProps(dispatch){
    return{
        onPressMenu : () => dispatch(dispatchChangeStateMenu()),
        onPressRoutView : (bool) => dispatch(dispatchPickRoutsView(bool))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)