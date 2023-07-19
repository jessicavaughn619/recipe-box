import PEACH_BABY from '../images/recipes/peach-dutch-baby.jpeg';
import MAC_N_CHEESE from '../images/recipes/mac-and-cheese.jpeg';
import APPLE_BABY from '../images/recipes/apple-dutch-baby-pancake.jpeg'
import CAST_IRON_PIZZA from '../images/recipes/cast-iron-skillet-pizza.jpeg'

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
            prepTime: 15,
            cookTime: 60
        },
        {
            id: 2,
            title: "Peach Dutch Baby",
            image: PEACH_BABY,
            ingredients: ['4 TBSP butter', '4 large eggs', '3 TBSP sugar', '3/4 cup flour', '3/4 cup milk', '1 TSP vanilla extract', '1/4 TSP salt', '2 ripe peaches, sliced thin', 'powdered sugar'],
            steps: ['Preheat oven to 425˚ with cast iron pan inside oven.', 'Add butter and sugar to skillet until melted.', 'Add peaches to cast iron pan.', 'Blend together eggs, flour, milk, vanilla, and salt; pour over peaches.', 'Bake for 22 minutes until golden brown.', 'Dust with powdered sugar and ENJOY!'],
            prepTime: 5,
            cookTime: 25
        },
        {
            id: 3,
            title: "Apple Dutch Baby",
            image: APPLE_BABY,
            ingredients: ['4 TBSP butter', '4 large eggs', '1 TBSP sugar', '3/4 cup flour', '3/4 cup milk', '1/2 TSP salt', '1/4 TSP baking powder', '3 medium apples, sliced very thin', '1/4-1/2 cup sugar for topping', '2 TSP cinnamon for topping'],
            steps: ['Preheat oven to 400˚ with cast iron pan inside oven.', 'Add butter to skillet until melted.', 'Add apples to cast iron pan.', 'Blend together eggs, flour, milk, sugar, salt, and baking powder; pour over apples.', 'Combine sugar and cinnamon for topping and sprinkle over top of egg mixture evenly.', 'Bake for 25 minutes until golden brown.'],
            prepTime: 5,
            cookTime: 25
        },
        {
            id: 4,
            title: "Cast Iron Skillet Pizza",
            image: CAST_IRON_PIZZA,
            ingredients: ['1 1/2 cups flour plus additional 1 1/2 TSP', '1/4 teaspoon active dry yeast', '3/4 cup hot water', '1 TBSP olive oil for skillet', '1/3 cup pizza sauce', '2 ounces shredded mozzerella cheese', '2 ounces shredded provolone cheese', 'pepperoni slices'],
            steps: ['Combine the flour, year, and salt in a medium mixing bowl.', 'Slowly pour in the hot water and stir until it is combined well (the dough will not be shaped into a ball).', 'Place plastic wrap on the bowl and make sure it is tightly covered.', 'Place bowl on counter and let dough rise for about 12-18 hours until it looks about double in size (the dough will spread out and have pitted marks in it).', 'Remove plastic wrap and then sprinkle 1 1/2 teaspoons of flour into dough and stir.', 'Place olive oil in a 10" skillet; spread oil all around pan including the sides.', 'Place the dough in the skillet and use oiled fingers to spread it out to the edges.', 'Place a large plate on the skillet and cover with lid for about 1 hour.', 'Preheat your oven to 500˚.', 'Remove the lid and top pizza with sauce, cheese, and pepperoni.', 'Turn stove burner on medium high and cook pizza for 3 minutes, uncovered, on burner.', 'Place pizza in oven and bake for about 14-16 minutes until the top is golden brown.'],
            prepTime: 1080,
            cookTime: 110
        }
    ]
export default allRecipes;