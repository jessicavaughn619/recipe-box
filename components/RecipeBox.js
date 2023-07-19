import { Text, ScrollView, StyleSheet } from "react-native"
import { useContext } from "react"
import RecipeCard from "./RecipeCard"
import { Context } from "../context"

export default function RecipeBox() {
    const recipes = useContext(Context)
    const allRecipes = recipes.map(recipe => (
        <RecipeCard 
            key={recipe.id}
            recipe={recipe}
        />
    ))
    return (
        <Context.Consumer>
        { recipes => 
        <ScrollView style={styles.cardContainer}>
            {allRecipes}
        </ScrollView>
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