import React from 'react';
import {StyleSheet, FlatList} from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
    /*const placeOutput = props.places.map((place, index) => (*/
        {/*<ListItem
            key={index}
            placeName={place}
            onItemPressed={() => props.onItemDeleted(index)}/>*/}
    /*))*/
    return <FlatList
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem
                placeName={info.item.value}
                placeImage={info.item.image}
                onItemPressed={() => props.onItemDeleted(info.item.key)}/>
        )}
    />
    /*return (
        {/!*<ScrollView style={styles.listContainer}>
            {placeOutput}
        </ScrollView>*!/}
    )*/
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;
