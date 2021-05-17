import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (termGelen) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: termGelen,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage("Something went wrong!");
        }
    };

    // ilk başta ekranı dolduracağımız defaul değerler için
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};
