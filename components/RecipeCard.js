import {ScrollView, Text, Image} from 'react-native'

export default function RecipeBox({recipe}) {
    const {title, ingredients, image, steps, time} = recipe;
    return (
        <ScrollView>
            <Text>{title}</Text>
            <Image 
            src={image}/>
            <Text>{ingredients}</Text>
            <Text>{steps}</Text>
            <Text>{time}</Text>
        </ScrollView>
    )
}