import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { primary, black, white } from "../Config/Colors";

export default function Tabs({ handleChange }) {
return (
        <View style={{flexDirection: 'row'}}>
            <TouchableWithoutFeedback>
                <View style={styles.activeContainer}>
                    <Text style={styles.activeTitle}>All</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.activeContainer} onPress={handleChange}>
                    <Text style={styles.activeTitle}> Market</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.activeContainer}>
                    <Text style={styles.activeTitle}>Electronics</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <View style={styles.activeContainer}>
                    <Text style={styles.activeTitle}> Food</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    backgroundColor: white,

    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  activeContainer: {
    marginLeft: 20,
    backgroundColor: primary,
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: black,
  },
  activeTitle: {
    fontSize: 16,
    color: white,
  },
});
