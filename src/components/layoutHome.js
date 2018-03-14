import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { dispatchChangeStateLayout } from '../actions/layoutHome'

import Login from '../components/login'
import Home from '../components/home'

const layoutHome = props => {

    const { layoutRender, changeLayout } = props

    return (
        <View style={styles.container}>
            {
                layoutRender == 'login'? <Login changeLayout={changeLayout}/> :
                layoutRender == 'home'? <Home
                 changeLayout={changeLayout}
                 navigation={props.navigation}
                 /> : undefined
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


function mapStateToProps(state){
    return{
        layoutRender : state.layoutHome
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeLayout: (layout) => dispatch(dispatchChangeStateLayout(layout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layoutHome)

