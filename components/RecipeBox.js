import { Text, View } from "react-native"
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
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
            Recipe Box
            </Text>
            {allRecipes}
        </View>
        }
        </Context.Consumer>
    )
}