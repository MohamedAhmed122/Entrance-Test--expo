import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { black } from '../Config/Colors'

export default function AppSeparator() {
    return (
        <View style={styles.separator}></View>
    )
}

const styles = StyleSheet.create({
separator:{
    width: '100%', 
    height: 1,
    backgroundColor: black,

}
    
})
