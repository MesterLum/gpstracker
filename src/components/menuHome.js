import React from 'react'
import { 
    StyleSheet,
    Platform,
    ScrollView,
    View,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { dayOrNigth } from '../utils/utils'

const Menu = props =>{


    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerAll}>
                {elementsMenu.map((element,key) => (
                    <View style={styles.continerUL} key={key}>
                        <Icon 
                            style={{marginRight:15, marginLeft: 30}}
                            name={element.icon}
                            size={25}
                            color={dayOrNigth() == 1? 'black': 'white'}
                        />
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.textPro}>{element.text}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

const elementsMenu = [
    {
        icon: 'user',
        text: 'Cuenta'
    },
    {
        icon: 'bus',
        text: 'Rutas'
    },
    {
        icon: 'sign-out',
        text: 'Cerrar Sesión'
    }
]



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor : dayOrNigth() == 1? 'white' : '#252830' 
    },
    containerAll : {
        marginTop: Platform.OS === 'ios'? 25: 3
    },
    continerUL: {
        height : 50,
        marginHorizontal : 3,
        flexDirection: 'row'
    },
    textPro: {
        fontSize: 20,
        color: dayOrNigth() == 1? 'black' : 'white',
        fontFamily : 'arial',
        fontWeight: 'bold'
    }

})

export default Menu