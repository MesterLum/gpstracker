import React, {Component} from 'react'
import {

} from 'react-native'
import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'

import { dispatchChangeStateMenu } from '../actions/menuHome'

import Map from './map'
import Menu from './menuHome'

class Home extends Component {

    constructor(props){
        super(props)
        
    }

    render(){
        const menu = <Menu />
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