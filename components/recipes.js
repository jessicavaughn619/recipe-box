import PEACH_BABY from '../images/recipes/peach-dutch-baby.jpeg';
import MAC_N_CHEESE from '../images/recipes/mac-and-cheese.jpeg';

const allRecipes = [
        {
            id: 1,
            title: "Mac 'n Cheese",
            image: MAC_N_CHEESE,
            ingredients: ['4 TBSP butter', '1/4 cup flour', '2 cups milk', '1/3 chunk Velveeta cheese', '1 box elbow noodles', 'paprika', 'pepper', 'salt'],
            steps: ['Preheat oven to 350˚.', 'Prepare a large casserole dish with baking spray.', 'Bring a medium pot filled with salted water to a boil; add elbow noodles and cook until al dente; drain.', 
            'Melt butter in medium saucepan over medium heat.', 'Add flour, stirring constantly for about five minutes, until the flour is cooked.', 
            'Gradually add milk, stirring constantly until hot.', 'Slice Velveeta into smaller chunks, then add to milk and butter mixture.', 'Season with pepper to taste.', 
            'Add drained pasta to casserole dish, pour cheese mixture over pasta and stir.', 'Season generously with paprika.', 'Bake uncovered for 15 minutes, then cover loosely with foil and cook for an additional 30-45 minutes, until browned and bubbly.'],
            time: 60
        },
        {
            id: 2,
            title: "Peach Dutch Baby",
            image: PEACH_BABY,
            ingredients: ['4 TBSP butter', '4 large eggs', '3 TBSP sugar', '3/4 cup flour', '3/4 cup milk', '1 TSP vanilla extract', '1/4 TSP salt', '2 ripe peaches, sliced thin', 'powdered sugar'],
            steps: ['Preheat oven to 425˚ with cast iron pan inside oven.', 'Add butter and sugar to skillet until melted.', 'Add peaches to cast iron pan.', 'Blend together eggs, flour, milk, vanilla, and salt; pour over peaches.', 'Bake for 22 minutes until golden brown.', 'Dust with powdered sugar and ENJOY!'],
            time: 25
        }
    ]
export default allRecipes;