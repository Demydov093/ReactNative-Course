import React from 'react';
import {StyleSheet, ScrollView} from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
    const placeOutput = props.places.map((place, index) => (
        <ListItem
            key={index}
            placeName={place}
            onItemPressed={() => props.onItemDeleted(index)}/>
    ))
    return (
        <ScrollView style={styles.listContainer}>
            {placeOutput}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;
