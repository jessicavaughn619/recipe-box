import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function RecipeCard({ route }) {
    const { title, image, ingredients, steps, cookTime, prepTime } = route.params.recipe;
    
    let cookTimeEmoji;
    if (cookTime <= 15) {
        cookTimeEmoji = '🍳';
    } else if (cookTime > 15 && cookTime <= 30) {
        cookTimeEmoji = '🍳🍳';
    } else if (cookTime > 30 && cookTime <= 45) {
        cookTimeEmoji = '🍳🍳🍳';
    } else if (cookTime > 45 && cookTime <= 60) {
        cookTimeEmoji = '🍳🍳🍳🍳';
    } else if (cookTime > 60) {
        cookTimeEmoji = '🍳🍳🍳🍳🍳';
    }

    let prepTimeEmoji;
    if (prepTime <= 15) {
        prepTimeEmoji = '🔪';
    } else if (prepTime > 15 && prepTime <= 30) {
        prepTimeEmoji = '🔪🔪';
    } else if (prepTime > 30 && prepTime <= 45) {
        prepTimeEmoji = '🔪🔪🔪';
    } else if (prepTime > 45 && prepTime <= 60) {
        prepTimeEmoji = '🔪🔪🔪🔪';
    } else if (prepTime > 60) {
        prepTimeEmoji = '🔪🔪🔪🔪🔪';
    }

    return (
        <ScrollView
            style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subheading}>Prep: {prepTimeEmoji} Cook: {cookTimeEmoji}</Text>
            <Image source={image} style={styles.image}/>
            <Text style={styles.subheading}>Ingredients:</Text>
            <View style={styles.list}>
                {ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.item}>
                        {`\u2022 ${ingredient}`}
                    </Text>
                ))}
            </View>
            <Text style={styles.subheading}>Steps:</Text>
            <View style={styles.list}>
            {steps.map((step, index) => (
                <Text key={index} style={styles.item}>
                    {`${index + 1}. ${step}`}
                </Text>
            ))} 
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
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
        marginBottom: 8,
    },
    list: {
        marginLeft: 8,
        marginBottom: 8,
    },
    item: {
        fontSize: 18,
    },
    image: {
        height: 150, 
        width: 150,
        marginBottom: 8,
    },
});