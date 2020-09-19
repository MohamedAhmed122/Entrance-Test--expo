import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "../component/Item";
import SearchInput from "../component/SearchInput";

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
    <View>
        <SearchInput changeText={(text)=> setText(text)}/>
        <View>
            {
                addStore.length >0 &&
                <View style={styles.container}>
                    <Text style={styles.text}>My Favorite Stores</Text>
                    {addStore.map((store) => (
                        <Item key={store.id.toString()} store={store}  addStore={addStore} setAddStore={setAddStore} />
                    ))}
                </View>
            }
            <View style={styles.container}>
                <Text style={styles.text}>Famous Store</Text>
                {FilterStores.map((store) => (
                    <Item key={store.id.toString()} store={store}  addStore={addStore} setAddStore={setAddStore} />
                ))}
            </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
text:{
    margin:20,
    fontWeight: 'bold',
    fontSize: 20,
}
});

const Stores = [
    {
        id: 1,
        name: "Lenta",
        category: "Market",
        imageUri:
        "https://tula.maxi-shopping.ru/images/cms/data/city-tula/arendatoram/logo/lenta.jpg",
        subscription: "1270",
        place: "2.4km",
    },
    {
        id: 2,
        name: "Kfc",
        category: "Food",
        imageUri: "https://7info.ru/wp-content/uploads/2019/08/KFC-696x427.jpg",
        subscription: "7500",
        place: "1.4km",
    },
    {
        id: 3,
        name: "DNS",
        category: "Electronics",
        imageUri: "https://brandwiki.ru/up/brands/product/190730_4447.jpg",
        subscription: "450",
        place: "500m",
    },
    {
        id: 4,
        name: "Metro",
        category: "Market",
        imageUri: "https://www.untienots.com/en/assets/articles/metro-12122019.jpg",
        subscription: "270",
        place: "1.9km",
    },
    {
        id: 5,
        name: "Mcdonalds",
        category: "Food",
        imageUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/1280px-McDonald%27s_logo.svg.png",
        subscription: "7600",
        place: "200m",
    },
    {
        id: 6,
        name: "MVideo",
        category: "Electronic",
        imageUri: "https://www.finam.ru/img/storestocks/shop/19737.png",
        subscription: "80",
        place: "5.3km",
    },
];
