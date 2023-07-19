import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Account from './components/Account';
import allRecipes from './components/recipes';
import { Context } from './context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecipeBox from './components/RecipeBox';
import MyDrawer from './components/MyDrawer';

const Tab = createBottomTabNavigator();

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  setRecipes(allRecipes);
}, [])

  return (
    <Context.Provider value={recipes}>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Recipes') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0d7446',
        tabBarInactiveTinyColor: 'gray',
        headerStyle: {height: 80}
      })}
      >
          <Tab.Screen
              name="Home"
              component={Home}
              options = {{ headerShown: false }}
          />
          <Tab.Screen
              name="Recipes"
              component={MyDrawer}
              options={{ title: 'Recipes', headerShown: false }}  
          />
          <Tab.Screen
              name="Account"
              component={Account}
          />
      </Tab.Navigator>
    </NavigationContainer>
    </Context.Provider>
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
