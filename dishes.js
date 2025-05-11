const dishes = [
  {
    name: "Adobo",
    ingredients: "1 kg Chicken or Pork, 1/4 cup Soy Sauce, 1/4 cup Vinegar, 1 head garlic, 2 bay leaves, 1 tsp peppercorns, 1 onion",
    instructions: "Marinate meat with soy sauce, vinegar, garlic, bay leaves, and peppercorns for 30 minutes. Sauté garlic and onion. Add meat, cook until browned. Add marinade and water. Simmer until tender.",
    history: "Adobo is a popular Filipino dish dating back to the Spanish colonization, originally used to preserve meat using vinegar and salt.",
    image: "adobo.jpg"
  },
  {
    name: "Sinigang na Baboy",
    ingredients: "1 kg Pork Belly, 1 onion, 2 tomatoes, radish, eggplant, green chili, 1 pack Sinigang Mix, kangkong",
    instructions: "Boil pork until tender. Add tomatoes and onion. Add vegetables. Pour sinigang mix. Simmer until veggies are tender.",
    history: "Sinigang is a sour soup considered one of the most traditional Filipino dishes, known for its refreshing tamarind-based broth.",
    image: "sinigang.jpg"
  },
  {
    name: "Kare-Kare",
    ingredients: "1 kg oxtail, 1 cup peanut butter, 1 tbsp annatto powder, eggplant, string beans, banana heart, 1 onion, garlic",
    instructions: "Boil oxtail until tender. In a separate pan, sauté onion and garlic, add annatto and peanut butter with broth. Add vegetables and simmer.",
    history: "Kare-Kare is a rich peanut-based stew, believed to be influenced by Indian curry brought by early migrants.",
    image: "kare-kare.jpg"
  },
  {
    name: "Lechon Kawali",
    ingredients: "1 kg pork belly, bay leaves, salt, pepper, vinegar, water, oil for frying",
    instructions: "Boil pork with spices until tender. Let it dry. Deep fry until golden and crispy. Serve with liver sauce.",
    history: "Lechon Kawali is a deep-fried version of roasted pork, popular for its crispy skin and tender meat.",
    image: "lechon-kawali.jpg"
  },
  {
    name: "Tinola",
    ingredients: "1 whole chicken, green papaya, chili leaves, ginger, garlic, onion, fish sauce",
    instructions: "Sauté garlic, onion, and ginger. Add chicken and fish sauce. Pour water and simmer. Add papaya and chili leaves.",
    history: "Tinola is a comforting chicken soup enjoyed in Filipino homes, often served to the sick for its nourishing broth.",
    image: "tinola.jpg"
  },
  {
    name: "Pancit ",
    ingredients: "Canton noodles, chicken, shrimp, cabbage, carrots, soy sauce, oyster sauce, garlic, onion",
    instructions: "Sauté garlic and onion. Add meat and shrimp. Stir in vegetables. Add sauces. Toss in noodles and mix until cooked.",
    history: "Pancit Canton reflects Chinese influence in Filipino cuisine, widely served during birthdays to symbolize long life.",
    image: "pancit.jpg"
  },
  {
    name: "Laing",
    ingredients: "Dried taro leaves, coconut milk, chili, shrimp paste, dried fish or pork, garlic, onion",
    instructions: "Sauté garlic and onion. Add shrimp paste and pork. Add coconut milk and taro leaves. Simmer until cooked.",
    history: "Laing originates from Bicol, known for its use of coconut milk and chili. It’s a spicy, creamy delicacy.",
    image: "laing.jpg"
  },
  {
    name: "Bicol Express",
    ingredients: "Pork belly, coconut milk, shrimp paste, chili peppers, garlic, onion, ginger",
    instructions: "Sauté garlic, onion, and ginger. Add pork and cook. Pour in coconut milk and shrimp paste. Add chilies and simmer.",
    history: "Named after the train from Manila to Bicol, this spicy dish is rich in coconut milk and chili — a signature Bicolano flavor.",
    image: "bicol-express.jpg"
  },
  {
    name: "Inihaw na Bangus",
    ingredients: "Whole milkfish, tomatoes, onions, ginger, salt, pepper",
    instructions: "Stuff bangus with chopped tomatoes, onions, and ginger. Season. Grill over hot coals until cooked through.",
    history: "Inihaw na Bangus is a popular grilled fish dish often served during picnics and family gatherings.",
    image: "inihaw-na-bangus.jpg"
  },
  {
    name: "Pinakbet",
    ingredients: "Bitter melon, squash, eggplant, string beans, tomatoes, shrimp paste, pork",
    instructions: "Sauté pork. Add shrimp paste and vegetables. Simmer until vegetables are tender and flavors are combined.",
    history: "Pinakbet is an Ilocano vegetable dish seasoned with bagoong, showcasing Filipino love for simple, healthy ingredients.",
    image: "pinakbet.jpg"
  }
];
dishes.push(
  {
    name: "Menudo",
    ingredients: "Pork, liver, potatoes, carrots, tomato sauce, garlic, onion, bell pepper, soy sauce",
    instructions: "Sauté garlic and onion. Add pork and liver, cook until browned. Add tomato sauce, vegetables, and seasonings. Simmer until tender.",
    history: "Menudo is a fiesta favorite in Filipino households, influenced by Spanish tomato-based stews.",
    image: "menudo.jpg"
  },
  {
    name: "Dinuguan",
    ingredients: "Pork, pork blood, vinegar, garlic, onion, chili, bay leaf",
    instructions: "Sauté garlic and onion. Add pork, cook until browned. Add vinegar, pork blood, and spices. Simmer until thick.",
    history: "Dinuguan is a savory pork blood stew, usually served with puto (rice cake) and has pre-colonial origins.",
    image: "dinuguan.jpg"
  },
  {
    name: "Tokwa’t Baboy",
    ingredients: "Boiled pork, fried tofu, vinegar, soy sauce, onion, garlic, chili",
    instructions: "Combine cubed pork and tofu. Mix vinegar-soy sauce dip with onions and garlic. Pour over or serve as dip.",
    history: "A popular pulutan or appetizer, Tokwa’t Baboy is loved for its crunchy tofu and tangy sauce.",
    image: "tokwat-baboy.jpg"
  },
  {
    name: "Lumpiang Shanghai",
    ingredients: "Ground pork, carrots, garlic, onion, spring roll wrapper, egg",
    instructions: "Mix all ingredients, wrap in lumpia wrapper. Deep fry until golden brown. Serve with sweet chili sauce.",
    history: "Lumpiang Shanghai, though Chinese-inspired, is a staple in Filipino celebrations.",
    image: "lumpiang-shanghai.jpg"
  },
  {
    name: "Ginisang Munggo",
    ingredients: "Mung beans, pork or shrimp, ampalaya leaves or spinach, garlic, onion, tomato, fish sauce",
    instructions: "Boil mung beans until soft. Sauté garlic, onion, and tomato. Add meat and munggo. Simmer with leafy greens.",
    history: "Ginisang Munggo is a humble yet healthy dish, traditionally served on Fridays in Catholic Filipino households.",
    image: "ginisang-munggo.jpg"
  },
  {
    name: "Paksiw na Pata",
    ingredients: "Pork hock, soy sauce, vinegar, garlic, banana blossoms, bay leaves, peppercorns",
    instructions: "Simmer pork with soy sauce, vinegar, and spices until tender. Add banana blossoms and continue cooking.",
    history: "Paksiw na Pata is a savory-sour dish, enjoyed for its fall-off-the-bone pork and rich sauce.",
    image: "paksiw-na-pata.jpg"
  },
  {
    name: "Tortang Talong",
    ingredients: "Eggplant, egg, garlic, onion, salt, pepper, oil",
    instructions: "Grill eggplant, peel skin. Flatten with fork. Dip in beaten egg, fry until golden.",
    history: "Tortang Talong is a simple yet hearty Filipino eggplant omelet, often served with ketchup or soy-vinegar dip.",
    image: "tortang-talong.jpg"
  },
  {
    name: "Pochero",
    ingredients: "Beef or pork, saba bananas, potatoes, cabbage, pechay, tomato sauce, chickpeas",
    instructions: "Boil meat until tender. Add vegetables, tomato sauce, and seasonings. Simmer until thick and flavorful.",
    history: "Pochero is a Spanish-influenced stew with a sweet-savory profile, featuring bananas and tomato broth.",
    image: "images/pochero.jpg"
  },
  {
    name: "Arroz Caldo",
    ingredients: "Chicken, rice, garlic, ginger, onion, fish sauce, boiled egg, calamansi",
    instructions: "Sauté aromatics, add chicken and rice. Simmer with broth until thick. Top with egg, garlic, and onion leeks.",
    history: "Arroz Caldo is a Filipino comfort food inspired by Chinese congee, best eaten during cold weather.",
    image: "arroz-caldo.jpg"
  },
  {
    name: "Champorado",
    ingredients: "Glutinous rice, cocoa powder or tablea, sugar, milk, condensed milk (optional)",
    instructions: "Boil rice and cocoa together until thick. Sweeten to taste. Serve with milk or dried fish on the side.",
    history: "Champorado is a chocolate rice porridge adapted from Mexican champurrado, brought during the galleon trade.",
    image: "champorado.jpg"
  }
);
