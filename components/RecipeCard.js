import {View, Text, Image} from 'react-native'

export default function RecipeBox({recipe}) {
    const { title, image, ingredients, steps, time } = recipe;

    return (
        <View>
            <Text>{title}</Text>
            <Image src={image}/>
            <Text>{ingredients}</Text>
            <Text>{steps}</Text>
            <Text>{time}</Text>
        </View>
    )
}