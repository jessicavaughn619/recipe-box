import PEACH_BABY from '../images/recipes/peach-dutch-baby.jpeg';
import MAC_N_CHEESE from '../images/recipes/mac-and-cheese.jpeg';
import APPLE_BABY from '../images/recipes/apple-dutch-baby-pancake.jpeg'
import CAST_IRON_PIZZA from '../images/recipes/cast-iron-skillet-pizza.jpeg'
import CARROT_CAKE from '../images/recipes/carrot-cake.jpeg'
import THANKSGIVING_STUFFING from '../images/recipes/stuffing.jpeg'
import OLIVE_OIL_CAKE from '../images/recipes/olive-oil-cake.jpeg'

const allRecipes = [
        {
            id: 1,
            title: "Mac 'n Cheese",
            image: MAC_N_CHEESE,
            ingredients: {
                main: ['4 TBSP butter', '1/4 cup flour', '2 cups milk', '1/3 chunk Velveeta cheese', '1 box elbow noodles', 'paprika', 'pepper', 'salt']
            },
            steps: {
                main: ['Preheat oven to 350˚.', 'Prepare a large casserole dish with baking spray.', 'Bring a medium pot filled with salted water to a boil; add elbow noodles and cook until al dente; drain.', 
            'Melt butter in medium saucepan over medium heat.', 'Add flour, stirring constantly for about five minutes, until the flour is cooked.', 
            'Gradually add milk, stirring constantly until hot.', 'Slice Velveeta into smaller chunks, then add to milk and butter mixture.', 'Season with pepper to taste.', 
            'Add drained pasta to casserole dish, pour cheese mixture over pasta and stir.', 'Season generously with paprika.', 'Bake uncovered for 15 minutes, then cover loosely with foil and cook for an additional 30-45 minutes, until browned and bubbly.']
            },
            prepTime: 15,
            cookTime: 60,
            favorite: false
        },
        {
            id: 2,
            title: "Peach Dutch Baby",
            image: PEACH_BABY,
            ingredients: {
                main: ['4 TBSP butter', '4 large eggs', '3 TBSP sugar', '3/4 cup flour', '3/4 cup milk', '1 TSP vanilla extract', '1/4 TSP salt', '2 ripe peaches, sliced thin', 'powdered sugar']
            },
            steps: {
                main: ['Preheat oven to 425˚ with cast iron pan inside oven.', 'Add butter and sugar to skillet until melted.', 'Add peaches to cast iron pan.', 'Blend together eggs, flour, milk, vanilla, and salt; pour over peaches.', 'Bake for 22 minutes until golden brown.', 'Dust with powdered sugar and ENJOY!']
            },
            prepTime: 5,
            cookTime: 25,
            favorite: false
        },
        {
            id: 3,
            title: "Apple Dutch Baby",
            image: APPLE_BABY,
            ingredients: {
                main: ['4 TBSP butter', '4 large eggs', '1 TBSP sugar', '3/4 cup flour', '3/4 cup milk', '1/2 TSP salt', '1/4 TSP baking powder', '3 medium apples, sliced very thin', '1/4-1/2 cup sugar for topping', '2 TSP cinnamon for topping']
            },
            steps: {
                main: ['Preheat oven to 400˚ with cast iron pan inside oven.', 'Add butter to skillet until melted.', 'Add apples to cast iron pan.', 'Blend together eggs, flour, milk, sugar, salt, and baking powder; pour over apples.', 'Combine sugar and cinnamon for topping and sprinkle over top of egg mixture evenly.', 'Bake for 25 minutes until golden brown.']
            },
            prepTime: 5,
            cookTime: 25,
            favorite: false
        },
        {
            id: 4,
            title: "Cast Iron Skillet Pizza",
            image: CAST_IRON_PIZZA,
            ingredients: {
                main: ['1 1/2 cups flour plus additional 1 1/2 TSP', '1/4 teaspoon active dry yeast', '3/4 cup hot water', '1 TBSP olive oil for skillet', '1/3 cup pizza sauce', '2 ounces shredded mozzerella cheese', '2 ounces shredded provolone cheese', '1 bag pepperoni slices']
            },
            steps: {
                main: ['Combine the flour, year, and salt in a medium mixing bowl.', 'Slowly pour in the hot water and stir until it is combined well (the dough will not be shaped into a ball).', 'Place plastic wrap on the bowl and make sure it is tightly covered.', 'Place bowl on counter and let dough rise for about 12-18 hours until it looks about double in size (the dough will spread out and have pitted marks in it).', 
                'Remove plastic wrap and then sprinkle 1 1/2 teaspoons of flour into dough and stir.', 'Place olive oil in a 10" skillet; spread oil all around pan including the sides.', 'Place the dough in the skillet and use oiled fingers to spread it out to the edges.', 
                'Place a large plate on the skillet and cover with lid for about 1 hour.', 'Preheat your oven to 500˚.', 'Remove the lid and top pizza with sauce, cheese, and pepperoni.', 'Turn stove burner on medium high and cook pizza for 3 minutes, uncovered, on burner.', 
                'Place pizza in oven and bake for about 14-16 minutes until the top is golden brown.']
            },
            prepTime: 1080,
            cookTime: 110,
            favorite: false
        },
        {
            id: 5,
            title: "Carrot Cake",
            image: CARROT_CAKE,
            ingredients: {
                frosting: ['8 oz cream cheese', '1/2 cup butter', '2 TSP vanilla', '4 3/4 cups powdered sugar'],
                cake: ['2 cups flour', '2 cups sugar', '1 TSP baking powder', '1 TSP baking soda', '1 TSP cinnamon', '1 TSP nutmeg', '1 TSP cloves', '1 TSP vanilla', '3 cups shredded carrots', '1 cup oil', '4 large eggs']
            },
            steps: {
                frosting: ['Beat together cream cheese, butter, and vanilla until light and fluffy.', 'Gradually add 2 cups sifted powdered sugar, beating well.', 'Gradually beat in the remaining powdered sugar.'],
                cake: ['Preheat oven to 350˚.', 'Grease and flour two round cake pans.', 'Mix flour, sugar, baking powder, baking soda, and spices in bowl.', 'Add carrots, oil, eggs, and vanilla to dry ingredients and beat until combined.', 'Pour batter into pans and bake for 30-35 minutes.', 'Cool cakes on wire racks for at least 10 minutes.', 'Remove cakes from pans and frost with cream cheese frosting.']
            },
            prepTime: 15,
            cookTime: 35,
            favorite: false
        },
        {
            id: 6,
            title: "Thanksgiving Stuffing",
            image: THANKSGIVING_STUFFING,
            ingredients: {
                main: ['1 white onion', 'loaf of bread', '4 stalks celery', '1/2 cup butter', '2 eggs', '1/4 cup milk', 'liver from turkey, cooked', 'poultry seasoning', 'salt', 'pepper']
            },
            steps: {
                main: ['Cut up loaf of bread into bite size pieces, dry for 1-2 days.', 'Cook turkey liver, giblets, and neck in pot - boil until cooked through.', 'Melt butter in pot.', 'Add celery to pot and cook for 10 minutes.', 'Mince onion and add to pot, cook for 5 minutes.', 'Pour mixture over stuffing and mix well.', 'Add poultry seasoning to taste.', 'Mince liver and add to stuffing.', 'Add eggs, some broth from the turkey giblet boil, and milk until stuffing forms moist texture.', 'Stuff turkey and cook, or cook in oven in separate casserole dish for approximately 30 minutes at 350˚.']
            },
            prepTime: 15,
            cookTime: 30,
            favorite: true
        },
        {
            id: 7,
            title: "Olive Oil Cake",
            image: OLIVE_OIL_CAKE,
            ingredients: {
                main: ['1 cup extra virgin olive oil', 
                    '1 1/2 cups sugar, plus 2 tbsp for sprinkling', 
                    '2 cups flour',
                    '3 eggs at room temperature',
                    '1 1/4 cup whole milk at room temperature',
                    '1 tbsp lemon zest', '2 tbsp lemon juice',
                    '1 tsp baking powder',
                    '1/4 tsp baking soda',
                    '1 tsp kosher salt',]
            },
            steps: {
                main: ['Preheat oven to 375˚.', 'Prepare 9” springform pan with baking spray or olive oil and flour.', 'Mix flour, baking powder, baking soda, and salt in large bowl.',
                    'Cream sugar and eggs in stand mixer in high for 5 minutes until very thick and fluffy.',
                    'With mixer still on high, slowly add olive oil and continue mixing for 2 minutes.',
                    'Turn mixer to low, add lemon juice, lemon zest, and milk until incorporated.',
                    'Slowly add dry ingredients just until combined.',
                    'Pour into prepared 9” springform pan and sprinkle sugar on top.',
                    'Bake for 40-45 minutes. Check for doneness, cook for extra 5 minutes at a time.', 
                    'Remove from oven and let cool on rack for 30 minutes.']
            },
            prepTime: 10,
            cookTime: 45,
            favorite: true
        },
    ]

export default allRecipes;