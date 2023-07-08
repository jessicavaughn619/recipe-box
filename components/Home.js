import { Button } from "react-native"
import logo from '../images/logo.png'

export default function Home({navigation}) {
    return (
        <View>
        <Image src={logo}/>
        <Button
            title="View Recipe Box"
            onPress={() => 
            navigation.navigate('RecipeBox', {name: 'Jessica'})}
        />
        </View>
    )
}