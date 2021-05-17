import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImageScreen({ item }) {
    return (
        <View style={styles.kutu}>
            <Image
                style={styles.kucukResim}
                source={{ uri: item.image_url }}
            />
            <Text style={styles.baslik}>{item.name}</Text>
            <Text style={styles.altbilgi}>
                {item.rating} Stars, {item.review_count} Reviews.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    kucukResim: {
        height: 150,
        width: 200,
        borderRadius: 10,
    },
    kutu: {
        marginLeft: 10,
    },
    baslik: {
        fontWeight: "bold",
    },
    altbilgi: {
        color: "#c8c2bc",
    },
});
