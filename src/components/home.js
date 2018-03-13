import React, {Component} from 'react'
import {

} from 'react-native'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'
import { NavigationActions } from 'react-navigation'
import { dispatchChangeStateMenu } from '../actions/menuHome'

import Map from './map'
import Menu from './menuHome'

class Home extends Component {

    constructor(props){
        super(props)
        this.onClickMenu = this.onClickMenu.bind(this)
    }

    onClickMenu(item){
        
          let navigate = NavigationActions.navigate({
            type: 'Navigation/NAVIGATE',
            routeName: 'homeNav',
            action: {
                type: 'Navigation/NAVIGATE',
                routeName: item
            }
            
        })
        this.props.navigation.dispatch(navigate)
        
    }

    render(){
        const menu = <Menu onClickMenu={this.onClickMenu}/>
        return(
            <SideMenu
            isOpen={this.props.isOpenMenu}
            menu={menu}
            >
            <Map onPressMenuIcon={this.props.onPressMenu}/>
            </SideMenu>
        )
    }
}

function mapStateToProps(state){
    return{
        isOpenMenu : state.menuHome.isOpen
    } 
}

function mapDispatchToProps(dispatch){
    return{
        onPressMenu : () => dispatch(dispatchChangeStateMenu())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)