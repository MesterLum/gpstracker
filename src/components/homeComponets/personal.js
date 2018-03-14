import React from 'react'
import { 
    View,
    Text,
    StyleSheet
} from 'react-native'

const Me = props => (
    <View style={styles.container}>
        <Text>Hola</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Me