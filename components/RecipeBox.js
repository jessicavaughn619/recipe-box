import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context";

export default function RecipeBox() {

    return (
        <Context.Consumer>
        {recipes => 
        <View style={styles.cardContainer}>
        <Text>Favorites</Text>
        </View>

        }
        </Context.Consumer>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'rgba(13, 116, 70, .6)',
        padding: 16,

    },
})