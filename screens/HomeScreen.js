import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "./components/SearchBar";
import useResults from "./hooks/useResults";
import YanaKayanKutu from "./components/YanaKayanKutu";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
        return results.filter((result) => {
            return result.price === price;
        });
    };

    // console.log(results);
    return (
        // manyak önemli. içindeki ScrollView in aşağı doğru kaydırabilmesi için bu gerekli flex:1
        // <View style={{ flex: 1 }}> yada empty element  <>
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} // fonksiyona parantez içinde değer göndericeksek bu şekil
            />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <Text>{term}</Text>
            <ScrollView>
                <YanaKayanKutu
                    results={filterResultsByPrice("$")}
                    title="Ucuz"
                />
                <YanaKayanKutu
                    results={filterResultsByPrice("$$")}
                    title="Pahalı"
                />
                <YanaKayanKutu
                    results={filterResultsByPrice("$$$")}
                    title="Manyak Pahalı"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
