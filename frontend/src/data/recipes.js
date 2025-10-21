export const recipes = [
  {
    id: 'smash-burger',
    name: 'Smash Burger',
    time: 20,
    difficulty: 'Easy',
    tags: ['american', 'beef', 'griddle'],
    ingredients: [
      'Ground beef (80/20)',
      'American cheese',
      'Potato buns',
      'Pickles',
      'Onion',
      'Special sauce',
      'Salt & pepper'
    ],
    steps: [
      'Heat griddle high, butter buns.',
      'Form loose balls, smash hard 10s.',
      'Season, flip, add cheese.',
      'Assemble with sauce, pickles, onion.'
    ],
  },
  {
    id: 'clam-chowder',
    name: 'New England Clam Chowder',
    time: 45,
    difficulty: 'Medium',
    tags: ['american', 'soup', 'seafood'],
    ingredients: ['Clams', 'Bacon', 'Potatoes', 'Onion', 'Celery', 'Cream', 'Butter', 'Flour'],
    steps: [
      'Render bacon, sauté aromatics.',
      'Add flour for roux, then stock.',
      'Simmer potatoes, add clams & cream.'
    ],
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    time: 60,
    difficulty: 'Medium',
    tags: ['american', 'chicken', 'party'],
    ingredients: ['Chicken wings', "Frank's RedHot", 'Butter', 'Salt', 'Pepper'],
    steps: [
      'Bake or fry wings until crisp.',
      'Warm sauce with butter, toss wings.',
      'Serve with ranch.'
    ],
  },
  {
    id: 'mac-and-cheese',
    name: 'Mac & Cheese',
    time: 30,
    difficulty: 'Easy',
    tags: ['american', 'pasta', 'comfort'],
    ingredients: ['Elbow pasta', 'Cheddar', 'Milk', 'Butter', 'Flour'],
    steps: [
      'Cook pasta al dente.',
      'Make roux, add milk and cheese.',
      'Combine with pasta.'
    ],
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    time: 90,
    difficulty: 'Medium',
    tags: ['american', 'dessert', 'bake'],
    ingredients: ['Pie dough', 'Granny Smith', 'Sugar', 'Cinnamon', 'Butter'],
    steps: [
      'Slice apples, toss with sugar & cinnamon.',
      'Fill crust, dot butter, top crust.',
      'Bake until golden.'
    ],
  },
  {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    time: 120,
    difficulty: 'Hard',
    tags: ['american', 'chicken', 'fry'],
    ingredients: ['Chicken', 'Buttermilk', 'Flour', 'Spices', 'Oil'],
    steps: [
      'Buttermilk brine overnight.',
      'Seasoned flour dredge.',
      'Fry until 165°F and crisp.'
    ],
  },
  {
    id: 'pancakes',
    name: 'Buttermilk Pancakes',
    time: 20,
    difficulty: 'Easy',
    tags: ['american', 'breakfast'],
    ingredients: ['Flour', 'Baking powder', 'Sugar', 'Buttermilk', 'Egg', 'Butter'],
    steps: ['Mix wet and dry separately, combine.', 'Cook on griddle until bubbles, flip.'],
  },
  {
    id: 'blt',
    name: 'BLT Sandwich',
    time: 10,
    difficulty: 'Easy',
    tags: ['american', 'sandwich'],
    ingredients: ['Bacon', 'Lettuce', 'Tomato', 'Mayo', 'Bread'],
    steps: ['Toast bread, spread mayo.', 'Layer bacon, lettuce, tomato.'],
  },
  {
    id: 'meatloaf',
    name: 'Classic Meatloaf',
    time: 75,
    difficulty: 'Medium',
    tags: ['american', 'beef', 'bake'],
    ingredients: ['Ground beef', 'Breadcrumbs', 'Egg', 'Onion', 'Ketchup'],
    steps: ['Mix, shape loaf, glaze with ketchup.', 'Bake until 160°F.'],
  },
  {
    id: 'chili',
    name: 'Hearty Chili',
    time: 60,
    difficulty: 'Medium',
    tags: ['american', 'stew'],
    ingredients: ['Ground beef', 'Onion', 'Beans (optional)', 'Tomatoes', 'Chili powder'],
    steps: ['Brown beef & onion.', 'Simmer with tomatoes, spices, beans if using.'],
  },
]

export function getRecipeById(id) {
  return recipes.find(r => r.id === id)
}
