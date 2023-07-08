import { Text, ScrollView } from "react-native"
import RecipeCard from "./RecipeCard"

export default function RecipeBox({route, recipes}) {
    const allRecipes = recipes.map(recipe => (
        <RecipeCard 
            key={recipe.id}
            recipe={recipe}
        />
    ))
    return (
        <ScrollView>
            <Text>
            {route.params.name}'s Recipe Box
            </Text>
            {allRecipes}
        </ScrollView>
    )
}