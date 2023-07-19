import { View, ImageBackground } from "react-native"

export default function Home({navigation}) {
    return (
        <View 
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground 
            source={require('../images/logo.png')}
            style={{height: '65%', width: '100%'}}>
        </ImageBackground>
        </View>
    )
}