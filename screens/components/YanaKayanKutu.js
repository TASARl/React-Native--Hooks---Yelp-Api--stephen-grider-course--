import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // navigation props ile hersayfaya göndermeye gerek kalmaz

import ImageScreen from "./ImageScreen";

const YanaKayanKutu = ({ results, title }) => {
    const navigation = useNavigation();

    if (results.length == 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text>{results.length}</Text>

            <Text style={styles.baslik}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Show Results", {
                                    id: item.id,
                                })
                            }>
                            <ImageScreen item={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    baslik: {
        fontWeight: "bold",
        fontSize: 22,
    },
});

export default YanaKayanKutu;
