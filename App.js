import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './components/Home';
import RecipeBox from './components/RecipeBox';
import recipes from './components/recipes'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Home'}}
          />
          <Stack.Screen
              name="RecipeBox"
              component={RecipeBox}
              recipes={recipes}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
