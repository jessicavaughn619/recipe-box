import { useContext } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { Context } from "../context";

export default function RecipeBox() {
    const recipes = useContext(Context)
    
    const favoriteRecipes = recipes.filter(recipe => (recipe.favorite === true))

    return (
        <Context.Consumer>
        {recipes => 
        <View style={styles.cardContainer}>
        <Text>Favorites</Text>
        {favoriteRecipes.map(recipe => (
            <View key={recipe.id}>
            <Text>{recipe.title}</Text>
            <Image source={recipe.image} style={styles.image}/>
            </View>
        ))}
        </View>
        }
        </Context.Consumer>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        height: 150, 
        width: 150,
        marginBottom: 8,
    },
})