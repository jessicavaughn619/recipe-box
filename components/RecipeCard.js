import { ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native';
import { Context } from '../context';
import FavoriteHeart from './FavoriteHeart';

export default function RecipeCard({ route }) {
    const { id, title, image, ingredients, steps, cookTime, prepTime, favorite } = route.params.recipe;
    
    const cookTimeEmojiCount = Math.ceil(cookTime / 15);
    const maxCookTimeEmojiCount = 5;
    const cookTimeEmoji = '🍳'.repeat(Math.min(cookTimeEmojiCount, maxCookTimeEmojiCount));

    const prepTimeEmojiCount = Math.ceil(prepTime / 15);
    const maxPrepTimeEmojiCount = 5;
    const prepTimeEmoji = '🔪'.repeat(Math.min(prepTimeEmojiCount, maxPrepTimeEmojiCount));

    function checkLength(arr) {
        return arr.length > 1
    }

    return (
        <Context.Consumer>
        {recipes => <ScrollView
            style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subheading}>Prep: {prepTimeEmoji} Cook: {cookTimeEmoji}</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}}>
            <Image source={image} style={styles.image}/>
            <FavoriteHeart favorite={favorite}/>
            </View>
            <Text style={styles.subheading}>Ingredients:</Text>
            {Object.keys(ingredients).map((section, index) => (
            <View key={index}>
                {checkLength(Object.keys(ingredients)) ? <Text style={styles.subsection}>{section.toUpperCase()}</Text> : null}
                {ingredients[section].map((ingredient, ingredientIndex) => (
                <Text key={ingredientIndex} style={styles.item}>
                    {`\u2022 ${ingredient}`}
                </Text>
                ))}
            </View>
            ))}
            <Text style={styles.subheading}>Steps:</Text>
            {Object.keys(steps).map((section, index) => (
            <View key={index}>
                {checkLength(Object.keys(steps)) ? <Text style={styles.subsection}>{section.toUpperCase()}</Text> : null}
                {steps[section].map((step, stepIndex) => (
                <Text key={stepIndex} style={styles.item}>
                {`${stepIndex + 1}. ${step}`}
                </Text>
                ))}
            </View>
            ))}
        </ScrollView>
        }
        </Context.Consumer>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
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
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        marginTop: 4,
    },
    subsection: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        marginTop: 4,
    },
    list: {
        marginLeft: 8,
        marginBottom: 8,
    },
    item: {
        fontSize: 18,
    },
    image: {
        height: 200, 
        width: 200,
        marginBottom: 8,
        alignSelf: 'center',
    },
});