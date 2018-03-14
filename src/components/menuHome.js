import React from 'react'
import { 
    StyleSheet,
    Platform,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { dayOrNigth } from '../utils/utils'
const dayOrNigthh = dayOrNigth()

const Menu = props =>{


    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerAll}>
            <View style={styles.profile}>
                <View style={styles.imageAvatar}>
                    <Image source={require('../../assets/img/logo.png')} style={{width:150,height:150, borderRadius: 40}}/>
                </View>
                <Text style={{fontFamily: 'arial', marginTop: 10}}>Eduardo Cuauhtemoc</Text>
            </View>
                {elementsMenu.map((element,key) => (
                    <View style={styles.continerUL} key={key}>
                        <Icon 
                            style={{marginRight:15, marginLeft: 30}}
                            name={element.icon}
                            size={25}
                            color={dayOrNigthh == 1? 'black': 'white'}
                        />
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.textPro} onPress={() => props.onClickMenu(element.key)}>{element.text}</Text>
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
        text: 'Cuenta',
        key: 'Personal'
    },
    {
        icon: 'bus',
        text: 'Rutas',
        key: 'Routs'
    },
    {
        icon: 'sign-out',
        text: 'Cerrar Sesión'
    }
]



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor : dayOrNigthh == 1? 'white' : '#252830' 
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
        color: dayOrNigthh == 1? 'black' : 'white',
        fontFamily : 'arial',
        fontWeight: 'bold'
    },
    profile: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: dayOrNigthh == 1? '#eeeeee' : '#62727b',
        borderColor: dayOrNigthh == 1? '#bcbcbc' : '#102027',
        borderWidth: 1,
        marginHorizontal: 8,
        marginBottom: 10
    },
    imageAvatar: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:100,
      }
})

export default Menu