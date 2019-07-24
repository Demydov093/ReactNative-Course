import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
            <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#eee",
        alignItems: "center"

    },
    placeImage: {
        marginRight: 8,
        width: 25,
        height: 25
    }
})

export default listItem;
