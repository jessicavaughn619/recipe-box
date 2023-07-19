import { createDrawerNavigator } from '@react-navigation/drawer';
import RecipeBox from './RecipeBox';
import { Context } from '../context';
import { useContext } from 'react';
import RecipeCard from './RecipeCard';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    const recipes = useContext(Context);

    const allRecipes = recipes.map(recipe => (
        <Drawer.Screen key={recipe.id} name={recipe.title} component={RecipeCard} initialParams={{recipe: recipe}}/>
    ))

    return (
        <Context.Consumer>
        {recipes => 
        <Drawer.Navigator>
        <Drawer.Screen name="Favorites" component={RecipeBox} />
        {allRecipes}
        </Drawer.Navigator>
        }
        </Context.Consumer>
    )
}