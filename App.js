import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ResultsShowScreen from "./screens/ResultsShowScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Business Search">
                <Stack.Screen
                    name="Business Search"
                    component={HomeScreen}
                    options={{ title: "Ana Sayfa" }}
                />
                <Stack.Screen
                    name="Show Results"
                    component={ResultsShowScreen}
                    options={{ title: "Detay Sayfa" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
