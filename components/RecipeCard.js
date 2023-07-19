import { View, Text, Image, StyleSheet } from 'react-native'

export default function RecipeBox({recipe}) {
    const { title, image, ingredients, steps, time } = recipe;
    
    let timeEmoji;
    if (time <= 15) {
        timeEmoji = '🍳';
    } else if (time > 15 && time <= 30) {
        timeEmoji = '🍳🍳';
    } else if (time > 30 && time <= 45) {
        timeEmoji = '🍳🍳🍳';
    } else if (time > 45 && time <= 60) {
        timeEmoji = '🍳🍳🍳🍳';
    } else if (time > 60) {
        timeEmoji = '🍳🍳🍳🍳🍳';
    }

    return (
        <View
            style={styles.cardContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subheading}>Time: {timeEmoji}</Text>
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
        </View>
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