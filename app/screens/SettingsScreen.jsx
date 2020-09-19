import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppSwitch from '../component/AppSwitch'
import AppSeparator from '../component/AppSeparator'

export default function SettingsScreen() {
    return (
        <View>
            <Text style={styles.title}>Title</Text>
            <View style={styles.container}>
                <Text style={styles.subTitle1}>SubTitle</Text>
                <AppSwitch  style={styles.switch}/>
            </View>
            <AppSeparator />
            <View style={styles.container}>
                <Text style={styles.subTitle}>SubTitle</Text>
                <AppSwitch  style={styles.switch}/>
            </View>
            <Text style={styles.title}>Title</Text>
            <View style={styles.container}>
                <Text style={styles.subTitle}>SubTitle</Text>
                <Text style={styles.switch}>12:00 </Text>
            </View>
            <AppSeparator />
        </View>
    )
}

const styles = StyleSheet.create({
title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:20,
   
},
container:{
    flexDirection: 'row',
     marginTop:10,
},
subTitle:{
    flex:1,  
    marginLeft: 15, 
  
},
subTitle1:{
    flex:1,  
    marginTop:20, 
    marginLeft: 15, 
    marginBottom:7,
},
switch:{
    marginRight: 15,
    marginBottom:7,
}

})
