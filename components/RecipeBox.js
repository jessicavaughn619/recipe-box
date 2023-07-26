import { useContext } from 'react'
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { Context } from "../context";
import FavoriteHeart from './FavoriteHeart';

export default function RecipeBox() {
    const recipes = useContext(Context)
    const favoriteRecipes = recipes.filter(recipe => (recipe.favorite === true))

    return (
        <Context.Consumer>
        {recipes => 
        <ScrollView style={styles.container}>
        {favoriteRecipes.map(recipe => (
            <View key={recipe.id} style={styles.cardContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{recipe.title}</Text>
            <FavoriteHeart favorite={recipe.favorite}/>
            </View>
            <Image source={recipe.image} style={styles.image}/>
            </View>
        ))}
        </ScrollView>
        }
        </Context.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 16,
        marginTop: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        alignSelf: 'center',
    },
    image: {
        height: 200, 
        width: 200,
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
})