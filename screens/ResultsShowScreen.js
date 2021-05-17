import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import yelp from "./api/yelp";

export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const resp = await yelp.get(`/${id}`);
        setResult(resp.data);
    };

    useEffect(() => {
        getResult(route.params.id);
    }, []);

    return result ? (
        <View>
            <Text>prop ile gelen değer: {route.params.id}</Text>
            <Text>{result.name}</Text>
            <Text>{result.display_phone}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item }} />
                )}
            />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginBottom: 15,
    },
});
