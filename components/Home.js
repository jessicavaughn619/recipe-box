import { Button } from "react-native"

export default function Home({navigation}) {
    return (
        <Button
            title="View Recipe Box"
            onPress={() => 
            navigation.navigate('RecipeBox', {name: 'Jessica'})}
        />
    )
}