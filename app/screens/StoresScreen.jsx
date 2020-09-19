import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "../component/Item";
import SearchInput from "../component/SearchInput";
import Constants from 'expo-constants'
import { SafeAreaView } from "react-native-safe-area-context";
import Stores from '../Config/Data'


export default function StoresScreen() {

const [storeDate, setStoreDate] = useState(Stores);
const [addStore, setAddStore] =useState([])
const [text, setText] = useState('')
console.log(text);

let FilterStores = storeDate.filter(
    (store)=>{
        return store.name.toLowerCase().indexOf(text.toLowerCase()) !==-1;
    }
)
return (
    <SafeAreaView>
        <View>
            <SearchInput changeText={(text)=> setText(text)}/>
            <View>
                {
                    addStore.length >0 &&
                    <View style={styles.container}>
                        <Text style={styles.text}>{text? '': 'My Favorite Stores'}</Text>
                        {addStore.map((store) => (
                            <Item key={store.id.toString()} store={store}  addStore={addStore} setAddStore={setAddStore} />
                        ))}
                    </View>
                }
                <View style={styles.container}>
                    <Text style={styles.text}>{text? '': 'Famous Stores'}</Text>
                    {FilterStores.map((store) => (
                        <Item key={store.id.toString()} store={store}  addStore={addStore} setAddStore={setAddStore} />
                    ))}
                </View>
            </View>
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({

safeArea:{
    paddingTop: Constants.statusBarHeight
},
text:{
    margin:20,
    fontWeight: 'bold',
    fontSize: 20,
}
});
