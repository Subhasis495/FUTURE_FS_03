export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating: number;
  popular: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot';
  customizations?: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  image: string;
  offer: string;
  distance: string;
  address: string;
  description: string;
  isOpen: boolean;
  categories: { id: string; name: string; count: number }[];
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Burger King',
    cuisine: 'Burgers, American',
    rating: 4.2,
    deliveryTime: '30-35 mins',
    priceForTwo: '₹350',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2b294502-7a45-417e-a576-19cdc0fceaa5_808103.jpg',
    offer: '50% OFF up to ₹100',
    distance: '1.2 km',
    address: '1st Floor, Brigade Road, Bangalore',
    description: 'Burger King is a global chain of hamburger fast food restaurants.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 8 },
      { id: 'burgers', name: 'Burgers', count: 12 },
      { id: 'chicken', name: 'Chicken', count: 8 },
      { id: 'sides', name: 'Sides', count: 6 },
      { id: 'beverages', name: 'Beverages', count: 8 },
      { id: 'desserts', name: 'Desserts', count: 4 }
    ],
    menu: [
      {
        id: '1-1',
        name: 'Whopper',
        description: 'A flame-grilled beef patty with tomatoes, lettuce, mayo, ketchup, pickles, and onions on a sesame seed bun',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg',
        category: 'burgers',
        category: 'burgers',
        isVeg: false,
        rating: 4.3,
        popular: true,
        customizations: ['No Onions', 'Extra Cheese', 'No Pickles']
      },
      {
        id: '1-2',
        name: 'Chicken Whopper',
        description: 'Grilled chicken patty with fresh lettuce, tomatoes, onions, and mayo on a sesame seed bun',
        price: 229,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg',
        category: 'burgers',
        isVeg: false,
        rating: 4.1,
        popular: true,
        customizations: ['Spicy Mayo', 'Extra Lettuce', 'No Tomatoes']
      },
      {
        id: '1-3',
        name: 'Veg Whopper',
        description: 'Plant-based patty with fresh vegetables and signature sauce',
        price: 179,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg',
        category: 'burgers',
        category: 'burgers',
        isVeg: true,
        rating: 4.0,
        popular: false,
        customizations: ['Extra Veggies', 'Cheese Slice', 'Spicy Sauce']
      },
      {
        id: '1-4',
        name: 'Double Whopper',
        description: 'Two flame-grilled beef patties with all the classic Whopper toppings',
        price: 299,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg',
        category: 'burgers',
        category: 'burgers',
        isVeg: false,
        rating: 4.4,
        popular: true
      },
      {
        id: '1-5',
        name: 'Chicken Royale',
        description: 'Crispy chicken fillet with lettuce and mayo',
        price: 189,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/523da59d-365f-47bc-bb93-5583508104e9_c9077a2b-eab2-4acf-85f0-d7a357c4757a.jpg',
        category: 'burgers',
        category: 'chicken',
        isVeg: false,
        rating: 4.2,
        popular: true
      },
      {
        id: '1-6',
        name: 'Chicken Strips',
        description: 'Crispy chicken strips served with dipping sauce',
        price: 149,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/10/defeb902-3363-484a-a3db-bf36a7579f29_cd12e083-54bf-4531-94f6-7119eecfc3ee.JPG',
        category: 'chicken',
        isVeg: false,
        rating: 4.0,
        popular: false
      },
      {
        id: '1-7',
        name: 'French Fries',
        description: 'Golden crispy fries seasoned with salt',
        price: 89,
        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'sides',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '1-8',
        name: 'Onion Rings',
        description: 'Crispy battered onion rings',
        price: 99,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/9/179edcd7-c2d5-4df5-9b94-b03cc33996f2_12d28d7c-5ac5-4ca2-9a4d-938e52b66ba9.jpg',
        category: 'sides',
        isVeg: true,
        rating: 4.0,
        popular: false
      },
      {
        id: '1-9',
        name: 'Coca Cola',
        description: 'Refreshing cola drink',
        price: 59,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/3/9/95638c3b-f38a-4bd8-8622-c6dd7c68b52a_195b672d-1ba7-4da6-9a9b-8d1adb35d594.jpg',
        category: 'beverages',
        isVeg: true,
        rating: 4.5,
        popular: true
      },
      {
        id: '1-10',
        name: 'Chocolate Sundae',
        description: 'Vanilla ice cream with chocolate sauce',
        price: 79,
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'desserts',
        isVeg: true,
        rating: 4.1,
        popular: false
      }
    ]
  },
  {
    id: '2',
    name: 'Pizza Hut',
    cuisine: 'Pizzas, Italian',
    rating: 4.1,
    deliveryTime: '25-30 mins',
    priceForTwo: '₹400',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/846a7c05-5066-4259-83f7-606a516403c0_364444.JPG',
    offer: '60% OFF up to ₹120',
    distance: '0.8 km',
    address: '2nd Floor, Commercial Street, Bangalore',
    description: 'Pizza Hut is known for its delicious pizzas and Italian cuisine.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 10 },
      { id: 'pizzas', name: 'Pizzas', count: 15 },
      { id: 'pasta', name: 'Pasta', count: 8 },
      { id: 'sides', name: 'Sides', count: 6 },
      { id: 'beverages', name: 'Beverages', count: 8 },
      { id: 'desserts', name: 'Desserts', count: 5 }
    ],
    menu: [
      {
        id: '2-1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil',
        price: 299,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pizzas',
        isVeg: true,
        rating: 4.3,
        popular: true,
        customizations: ['Extra Cheese', 'Thin Crust', 'Thick Crust']
      },
      {
        id: '2-2',
        name: 'Pepperoni Pizza',
        description: 'Pizza topped with pepperoni, mozzarella cheese, and tomato sauce',
        price: 399,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pizzas',
        isVeg: false,
        rating: 4.4,
        popular: true
      },
      {
        id: '2-3',
        name: 'Chicken Supreme',
        description: 'Pizza with grilled chicken, bell peppers, onions, and cheese',
        price: 449,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pizzas',
        isVeg: false,
        rating: 4.2,
        popular: true
      },
      {
        id: '2-4',
        name: 'Veggie Deluxe',
        description: 'Pizza loaded with fresh vegetables and cheese',
        price: 349,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pizzas',
        isVeg: true,
        rating: 4.1,
        popular: false
      },
      {
        id: '2-5',
        name: 'Chicken Alfredo Pasta',
        description: 'Creamy pasta with grilled chicken and alfredo sauce',
        price: 279,
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pasta',
        isVeg: false,
        rating: 4.0,
        popular: true
      },
      {
        id: '2-6',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter and herbs',
        price: 129,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/18/c384af53-e0bb-4d00-b466-37e195225a25_435a2c20-6278-466e-b594-e5ecd059b3a8.jpg',
        category: 'sides',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '2-7',
        name: 'Chicken Wings',
        description: 'Spicy chicken wings with dipping sauce',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/4/48e99d4b-87f7-4b4d-bc4f-91d5ab58d775_574cf35b-2cf1-4824-a3f3-1c3443c90e9e.jpg',
        category: 'sides',
        isVeg: false,
        rating: 4.3,
        popular: false,
        spiceLevel: 'hot'
      },
      {
        id: '2-8',
        name: 'Pepsi',
        description: 'Refreshing cola beverage',
        price: 59,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d36ca69eb7666f96efe1cf4f1f0b205f',
        category: 'beverages',
        isVeg: true,
        rating: 4.4,
        popular: true
      },
      {
        id: '2-9',
        name: 'Chocolate Brownie',
        description: 'Warm chocolate brownie with vanilla ice cream',
        price: 149,
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'desserts',
        isVeg: true,
        rating: 4.2,
        popular: true
      }
    ]
  },
  {
    id: '3',
    name: 'KFC',
    cuisine: 'Chicken, Fast Food',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    priceForTwo: '₹400',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/700335c8-1c3c-4eec-9a84-24b057b42ba8_724254.JPG',
    offer: '40% OFF up to ₹80',
    distance: '1.5 km',
    address: 'Ground Floor, MG Road, Bangalore',
    description: 'KFC is famous for its finger lickin\' good chicken.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 8 },
      { id: 'chicken', name: 'Chicken', count: 12 },
      { id: 'burgers', name: 'Burgers', count: 6 },
      { id: 'wraps', name: 'Wraps', count: 4 },
      { id: 'sides', name: 'Sides', count: 8 },
      { id: 'beverages', name: 'Beverages', count: 6 }
    ],
    menu: [
      {
        id: '3-1',
        name: 'Original Recipe Chicken',
        description: 'KFC\'s signature fried chicken with 11 herbs and spices',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ye1imbdqn5efc7vheuah',
        category: 'chicken',
        isVeg: false,
        rating: 4.5,
        popular: true
      },
      {
        id: '3-2',
        name: 'Hot & Crispy Chicken',
        description: 'Spicy and crispy fried chicken pieces',
        price: 219,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ye1imbdqn5efc7vheuah',
        category: 'chicken',
        isVeg: false,
        rating: 4.4,
        popular: true,
        spiceLevel: 'hot'
      },
      {
        id: '3-3',
        name: 'Zinger Burger',
        description: 'Spicy chicken fillet burger with lettuce and mayo',
        price: 179,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/d5bc5b32dd177f5f207cad66556a572b',
        category: 'burgers',
        isVeg: false,
        rating: 4.3,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '3-4',
        name: 'Chicken Bucket',
        description: '8 pieces of mixed chicken - perfect for sharing',
        price: 599,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ye1imbdqn5efc7vheuah',
        category: 'chicken',
        isVeg: false,
        rating: 4.6,
        popular: true
      },
      {
        id: '3-5',
        name: 'Twister Wrap',
        description: 'Chicken strips wrapped in soft tortilla with vegetables',
        price: 149,
        image: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'wraps',
        isVeg: false,
        rating: 4.1,
        popular: false
      },
      {
        id: '3-6',
        name: 'Popcorn Chicken',
        description: 'Bite-sized crispy chicken pieces',
        price: 129,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/a2ad46f783bcb82d75d139e1a6141eb2',
        category: 'sides',
        isVeg: false,
        rating: 4.2,
        popular: true
      },
      {
        id: '3-7',
        name: 'Coleslaw',
        description: 'Fresh cabbage salad with creamy dressing',
        price: 79,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'sides',
        isVeg: true,
        rating: 3.9,
        popular: false
      },
      {
        id: '3-8',
        name: '7UP',
        description: 'Lemon-lime flavored soft drink',
        price: 59,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/16/05a5ecbb-da9d-418a-8e13-86070e005409_8791cfc3-eab9-4084-ba38-0026e828edd5.jpg',
        category: 'beverages',
        isVeg: true,
        rating: 4.3,
        popular: true
      }
    ]
  },
  {
    id: '4',
    name: 'McDonald\'s',
    cuisine: 'Burgers, Fast Food',
    rating: 4.4,
    deliveryTime: '20-25 mins',
    priceForTwo: '₹400',
    image: 'https://imgs.search.brave.com/ttfOagr5wwej4kPuTshiRYiqk75FWFq24vuJB0kEau8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbWNk/b25hbGQtcy1mb29k/LXBpY3R1cmVzLTE1/MDAteC0xMDAwLXg5/dnJqczhiMzZyZ3Nv/bXAuanBn',
    offer: 'Flat ₹125 OFF',
    distance: '2.1 km',
    address: '1st Floor, Forum Mall, Bangalore',
    description: 'McDonald\'s serves quality food and quick service in a clean, welcoming environment.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 10 },
      { id: 'burgers', name: 'Burgers', count: 8 },
      { id: 'chicken', name: 'Chicken', count: 6 },
      { id: 'breakfast', name: 'Breakfast', count: 5 },
      { id: 'sides', name: 'Sides', count: 7 },
      { id: 'beverages', name: 'Beverages', count: 8 },
      { id: 'desserts', name: 'Desserts', count: 6 }
    ],
    menu: [
      {
        id: '4-1',
        name: 'Big Mac',
        description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun',
        price: 249,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/8/eba94b82-5d55-4fe2-9d04-0270fd179044_78e1d175-de38-4620-a5bb-baed165f55bf.png',
        category: 'burgers',
        isVeg: false,
        rating: 4.5,
        popular: true
      },
      {
        id: '4-2',
        name: 'Quarter Pounder',
        description: 'Quarter pound of 100% fresh beef cooked when you order',
        price: 299,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/8/eba94b82-5d55-4fe2-9d04-0270fd179044_78e1d175-de38-4620-a5bb-baed165f55bf.png',
        category: 'burgers',
        isVeg: false,
        rating: 4.4,
        popular: true
      },
      {
        id: '4-3',
        name: 'McChicken',
        description: 'Crispy chicken patty with lettuce and mayo',
        price: 179,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/8/eba94b82-5d55-4fe2-9d04-0270fd179044_78e1d175-de38-4620-a5bb-baed165f55bf.png',
        category: 'chicken',
        isVeg: false,
        rating: 4.2,
        popular: true
      },
      {
        id: '4-4',
        name: 'Chicken McNuggets',
        description: 'Tender chicken pieces in a crispy coating',
        price: 159,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/4/e8e761d8-3d28-4431-8695-8a30829170e3_d136810b-92d4-412a-aeb4-a5cbe2491ee7.png',
        category: 'chicken',
        isVeg: false,
        rating: 4.3,
        popular: true
      },
      {
        id: '4-5',
        name: 'Egg McMuffin',
        description: 'English muffin with egg, cheese, and Canadian bacon',
        price: 129,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'breakfast',
        isVeg: false,
        rating: 4.1,
        popular: false
      },
      {
        id: '4-6',
        name: 'Hash Browns',
        description: 'Golden, crispy potato hash browns',
        price: 69,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/21/742f41fe-465d-4882-99f2-158d9ab02ebf_c9356943-14f5-4f1b-bacc-c652cdaffdc5.png',
        category: 'sides',
        isVeg: true,
        rating: 4.0,
        popular: true
      },
      {
        id: '4-7',
        name: 'Apple Pie',
        description: 'Warm apple pie with flaky crust',
        price: 89,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/4/fc3974c5-893d-48da-b0c9-14b16bff886d_ba52093d-ebb5-4cb1-a0d2-c8af727ce204.jpg',
        category: 'desserts',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '4-8',
        name: 'McCafe Coffee',
        description: 'Premium roasted coffee',
        price: 99,
        image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'beverages',
        isVeg: true,
        rating: 4.1,
        popular: false
      }
    ]
  },
  {
    id: '5',
    name: 'Domino\'s Pizza',
    cuisine: 'Pizzas, Italian',
    rating: 4.2,
    deliveryTime: '25-30 mins',
    priceForTwo: '₹400',
    image: 'https://imgs.search.brave.com/YJVoKbaLIL_i5lNUWtHbcFnoci924AhR05owTRIWlVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk2Lzlk/LzUwLzk2OWQ1MDAz/ZTg4Y2Y1MWY3ZTM5/MWMwZjA4OTA2YzZm/LmpwZw',
    offer: '₹125 OFF above ₹499',
    distance: '0.9 km',
    address: 'Ground Floor, Residency Road, Bangalore',
    description: 'Domino\'s is committed to bringing you great pizza and fast delivery.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 12 },
      { id: 'pizzas', name: 'Pizzas', count: 18 },
      { id: 'pasta', name: 'Pasta', count: 6 },
      { id: 'sides', name: 'Sides', count: 8 },
      { id: 'beverages', name: 'Beverages', count: 6 },
      { id: 'desserts', name: 'Desserts', count: 4 }
    ],
    menu: [
      {
        id: '5-1',
        name: 'Peppy Paneer',
        description: 'Chunky paneer with crisp capsicum and spicy red paprika',
        price: 349,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pizzas',
        isVeg: true,
        rating: 4.3,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '5-2',
        name: 'Chicken Dominator',
        description: 'Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers',
        price: 499,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed',
        category: 'pizzas',
        isVeg: false,
        rating: 4.5,
        popular: true
      },
      {
        id: '5-3',
        name: 'Farmhouse',
        description: 'Delightful combination of onion, capsicum, tomato & grilled mushroom',
        price: 399,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed',
        category: 'pizzas',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '5-4',
        name: 'Chicken Golden Delight',
        description: 'Double pepper barbecue chicken, golden corn and extra cheese',
        price: 449,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed',
        category: 'pizzas',
        isVeg: false,
        rating: 4.4,
        popular: true
      },
      {
        id: '5-5',
        name: 'Chicken Alfredo Pasta',
        description: 'Penne pasta in white sauce with chicken and herbs',
        price: 249,
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'pasta',
        isVeg: false,
        rating: 4.1,
        popular: false
      },
      {
        id: '5-6',
        name: 'Garlic Breadsticks',
        description: 'Baked to perfection and hand-brushed with garlic butter',
        price: 149,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fe3edaaaf6ffd68eb2bb20fdfa02a63a',
        category: 'sides',
        isVeg: true,
        rating: 4.3,
        popular: true
      },
      {
        id: '5-7',
        name: 'Stuffed Garlic Bread',
        description: 'Garlic bread stuffed with cheese and seasonings',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fe3edaaaf6ffd68eb2bb20fdfa02a63a',
        category: 'sides',
        isVeg: true,
        rating: 4.4,
        popular: true
      },
      {
        id: '5-8',
        name: 'Choco Lava Cake',
        description: 'Chocolate cake with molten chocolate center',
        price: 99,
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'desserts',
        isVeg: true,
        rating: 4.5,
        popular: true
      }
    ]
  },
  {
    id: '6',
    name: 'Subway',
    cuisine: 'Healthy Food, Sandwiches',
    rating: 4.0,
    deliveryTime: '30-35 mins',
    priceForTwo: '₹350',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/ae382824-0488-4715-ba44-5197d0647e87_55397.jpg',
    offer: '50% OFF up to ₹100',
    distance: '1.7 km',
    address: '2nd Floor, UB City Mall, Bangalore',
    description: 'Subway offers fresh, customizable sandwiches and salads.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 8 },
      { id: 'subs', name: 'Subs', count: 12 },
      { id: 'salads', name: 'Salads', count: 6 },
      { id: 'wraps', name: 'Wraps', count: 4 },
      { id: 'sides', name: 'Sides', count: 5 },
      { id: 'beverages', name: 'Beverages', count: 6 }
    ],
    menu: [
      {
        id: '6-1',
        name: 'Chicken Teriyaki',
        description: 'Tender chicken strips with teriyaki sauce and vegetables',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/9/6a4362f9-c02b-411c-b489-a62799019cf0_32b73a5a-8a23-481c-9237-89a48a9fa5b5.png',
        category: 'subs',
        isVeg: false,
        rating: 4.2,
        popular: true
      },
      {
        id: '6-2',
        name: 'Veggie Delite',
        description: 'Fresh vegetables with your choice of sauce',
        price: 149,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/3/6/718a859f-14f9-4a6e-80c2-82309982afb5_2d2e8df6-3594-4cab-8d18-2f16c180038f.png',
        category: 'subs',
        isVeg: true,
        rating: 4.0,
        popular: true
      },
      {
        id: '6-3',
        name: 'Italian BMT',
        description: 'Pepperoni, salami, and ham with cheese and vegetables',
        price: 229,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/3/6/9e6c9ee5-a10f-43a1-8a4d-6592565ab0f5_e301de9a-dda8-4ba7-bbaf-150b29b16c3c.png',
        category: 'subs',
        isVeg: false,
        rating: 4.3,
        popular: true
      },
      {
        id: '6-4',
        name: 'Chicken Caesar Salad',
        description: 'Grilled chicken with caesar dressing and croutons',
        price: 179,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/28/97d4e644-2455-422c-b2ea-40182085bd52_a0907bb7-373f-4b84-b238-9e183139aa0a.jpg',
        category: 'salads',
        isVeg: false,
        rating: 4.1,
        popular: false
      },
      {
        id: '6-5',
        name: 'Chicken Wrap',
        description: 'Grilled chicken wrapped in soft tortilla',
        price: 169,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/21/bf671cea-0d66-4923-badc-2e547d407735_87fde05a-d7cc-44ae-bf7c-fd6f87bb1e24.jpeg',
        category: 'wraps',
        isVeg: false,
        rating: 4.0,
        popular: false
      },
      {
        id: '6-6',
        name: 'Cookies',
        description: 'Freshly baked chocolate chip cookies',
        price: 59,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/19b54446c5baf13d9172dbac7171c18d',
        category: 'sides',
        isVeg: true,
        rating: 4.2,
        popular: true
      }
    ]
  },
  {
    id: '7',
    name: 'Taco Bell',
    cuisine: 'Mexican, Fast Food',
    rating: 4.1,
    deliveryTime: '25-30 mins',
    priceForTwo: '₹300',
    image: 'https://imgs.search.brave.com/cbc7UisqVbwLoS-aSFESewMVAcg8LYQFx5oA5Y61V7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHozZ211cXc2/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwscV9h/dXRvLHdfNzUwLGZf/YXV0by9mX2F1dG8v/VGFjby1CZWxsLVNl/Y3JldC1NZW51LXBo/cG9CRzhuUA',
    offer: '30% OFF up to ₹75',
    distance: '2.3 km',
    address: '3rd Floor, Phoenix Mall, Bangalore',
    description: 'Taco Bell serves Mexican-inspired food with bold flavors.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 6 },
      { id: 'tacos', name: 'Tacos', count: 8 },
      { id: 'burritos', name: 'Burritos', count: 6 },
      { id: 'quesadillas', name: 'Quesadillas', count: 4 },
      { id: 'sides', name: 'Sides', count: 5 },
      { id: 'beverages', name: 'Beverages', count: 4 }
    ],
    menu: [
      {
        id: '7-1',
        name: 'Crunchy Taco Supreme',
        description: 'Crispy taco shell with seasoned beef, lettuce, tomatoes, cheese, and sour cream',
        price: 89,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/21/300b8aac-9044-4e48-a874-caae554461f2_17d521bc-7c7c-4bd6-a04e-972b1bf20c9d.jpg',
        category: 'tacos',
        isVeg: false,
        rating: 4.2,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '7-2',
        name: 'Bean Burrito',
        description: 'Warm flour tortilla filled with refried beans, cheese, and sauce',
        price: 129,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/20/49377916-666f-49dd-b354-080d883035a9_52dfa0c8-36e1-4a71-8a67-d3802b923cd1.png',
        category: 'burritos',
        isVeg: true,
        rating: 4.0,
        popular: true
      },
      {
        id: '7-3',
        name: 'Chicken Quesadilla',
        description: 'Grilled tortilla with chicken, cheese, and peppers',
        price: 179,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb53d5bd1638d7fa8ffb186cef076d3e',
        category: 'quesadillas',
        isVeg: false,
        rating: 4.3,
        popular: true
      },
      {
        id: '7-4',
        name: 'Nachos Supreme',
        description: 'Crispy tortilla chips with cheese, beans, tomatoes, and sour cream',
        price: 149,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cb53d5bd1638d7fa8ffb186cef076d3e',
        category: 'sides',
        isVeg: true,
        rating: 4.1,
        popular: true
      },
      {
        id: '7-5',
        name: 'Mexican Rice',
        description: 'Seasoned rice with Mexican spices',
        price: 79,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'sides',
        isVeg: true,
        rating: 3.9,
        popular: false
      }
    ]
  },
  {
    id: '8',
    name: 'A1 Haji Biryani',
    cuisine: 'Biryani, Indian',
    rating: 4.4,
    deliveryTime: '35-40 mins',
    priceForTwo: '₹500',
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/FOOD_CATALOG/IMAGES/CMS/2025/3/8/91674cb9-9539-4110-bc9d-0cb202a3593a_d2cf8f04-f9ef-4756-9035-9e96a467d28e.jpeg',
    offer: '20% OFF up to ₹100',
    distance: '1.8 km',
    address: 'Ground Floor, Koramangala, Bangalore',
    description: 'Authentic biryani and Indian cuisine with traditional flavors.',
    isOpen: true,
    categories: [
      { id: 'recommended', name: 'Recommended', count: 8 },
      { id: 'biryani', name: 'Biryani', count: 10 },
      { id: 'curries', name: 'Curries', count: 12 },
      { id: 'starters', name: 'Starters', count: 8 },
      { id: 'breads', name: 'Breads', count: 6 },
      { id: 'desserts', name: 'Desserts', count: 5 }
    ],
    menu: [
      {
        id: '8-1',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with tender chicken and spices',
        price: 299,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/91a1a3aa8fd2c03443bedad1f8041e20',
        category: 'biryani',
        isVeg: false,
        rating: 4.5,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '8-2',
        name: 'Mutton Biryani',
        description: 'Fragrant rice with succulent mutton pieces and traditional spices',
        price: 399,
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
        category: 'biryani',
        isVeg: false,
        rating: 4.6,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '8-3',
        name: 'Veg Biryani',
        description: 'Aromatic rice with mixed vegetables and aromatic spices',
        price: 249,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/5/14/4f3a6687-3dda-43fe-a36d-8c97946234fe_97e8e3bb-aa8a-4087-b6c5-c855ff500ad1.jpg',
        category: 'biryani',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '8-4',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        price: 279,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d020e9ezqhegijto2ikk',
        category: 'curries',
        isVeg: false,
        rating: 4.4,
        popular: true,
        spiceLevel: 'mild'
      },
      {
        id: '8-5',
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese marinated in spices',
        price: 199,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/9/21/f18bdd82-bff4-41b7-b627-36ff960ad2b9_6efcdf54-6d91-4d25-914e-f59f869b074b.jpg',
        category: 'starters',
        isVeg: true,
        rating: 4.3,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '8-6',
        name: 'Chicken Tikka',
        description: 'Marinated chicken pieces grilled to perfection',
        price: 229,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/2/8/ae8eb8f5-0b0a-4907-9142-8ecad88dc1b3_24c0cd18-153b-4756-bd14-9097926a943a.jpg',
        category: 'starters',
        isVeg: false,
        rating: 4.4,
        popular: true,
        spiceLevel: 'medium'
      },
      {
        id: '8-7',
        name: 'Garlic Naan',
        description: 'Soft bread topped with garlic and herbs',
        price: 79,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/64feb1a1abd0b389ffd9da113159a0f8',
        category: 'breads',
        isVeg: true,
        rating: 4.2,
        popular: true
      },
      {
        id: '8-8',
        name: 'Gulab Jamun',
        description: 'Sweet dumplings in sugar syrup',
        price: 89,
        image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/23/f0a2cda7-114f-4b13-bd3a-a5f758ad0f7b_1e742a54-228b-4d5c-9499-d54b0a696c8f.png',
        category: 'desserts',
        isVeg: true,
        rating: 4.3,
        popular: true
      }
    ]
  }
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id);
};

export const getRestaurantsByCategory = (category: string): Restaurant[] => {
  return restaurants.filter(restaurant => 
    restaurant.cuisine.toLowerCase().includes(category.toLowerCase())
  );
};

export const searchRestaurants = (query: string): Restaurant[] => {
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(query.toLowerCase())
  );
};