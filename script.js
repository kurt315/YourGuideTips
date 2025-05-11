// Sample blog posts
const posts = [
  {
    title: "10 Best Filipino Dishes",
    content: "Adobo, Sinigang, Kare-Kare, Lechon, and more.",
    category: "food"
  },
  {
    title: "Top Netflix Shows This Month",
    content: "Stranger Things, The Crown, Black Mirror...",
    category: "entertainment"
  },
  {
    title: "Backpacking in Palawan",
    content: "Explore the lagoons and beaches of El Nido and Coron.",
    category: "travel"
  },
  {
    title: "Best Laptops for Coding in 2025",
    content: "MacBook Pro M3, Dell XPS, Lenovo ThinkPad, etc.",
    category: "tech"
  },
  {
    title: "Morning Routines of Successful People",
    content: "Wake up early, journal, meditate, exercise...",
    category: "lifestyle"
  }
];

// Render posts into respective sections
function renderPosts() {
  posts.forEach(post => {
    const section = document.querySelector(`#${post.category} .post-list`);
    const article = document.createElement("article");
    article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
    section.appendChild(article);
  });
}

renderPosts();
// posts.js
const posts = [
  {
    title: "10 Best Filipino Dishes",
    content: "Adobo, Sinigang, Kare-Kare, Lechon, and more.",
    category: "food"
  },
  {
    title: "Street Foods to Try in Manila",
    content: "Isaw, Kwek-kwek, Fishball, Betamax!",
    category: "food"
  },
  {
    title: "Top Netflix Shows This Month",
    content: "Stranger Things, The Crown, Black Mirror...",
    category: "entertainment"
  },
  {
    title: "Backpacking in Palawan",
    content: "Explore the lagoons and beaches of El Nido and Coron.",
    category: "travel"
  }
  // ... add more
];
// posts.js
const posts = [
  {
    title: "10 Best Filipino Dishes",
    content: "Adobo, Sinigang, Kare-Kare, Lechon, and more.",
    category: "food"
  },
  {
    title: "Street Foods to Try in Manila",
    content: "Isaw, Kwek-kwek, Fishball, Betamax!",
    category: "food"
  },
  {
    title: "Backpacking in Palawan",
    content: "Explore El Nido and Coron like never before.",
    category: "travel"
  },
  {
    title: "Top Netflix Shows This Month",
    content: "Stranger Things, The Crown, Black Mirror...",
    category: "entertainment"
  }
];
const dishes = [
  {
    name: "Adobo",
    ingredients: "1 kg Chicken (or Pork), 1/4 cup Soy Sauce, 1/4 cup Vinegar, 1 onion, 1 head garlic, 2 bay leaves, 1 tsp peppercorns, 1/4 cup cooking oil",
    instructions: "Combine chicken, soy sauce, vinegar, garlic, onion, bay leaves, and peppercorns. Marinate for at least 30 minutes. Heat oil in a pan, sauté the garlic and onions. Add the marinated chicken and cook for 10-15 minutes. Add water to cover the chicken and let it simmer for about 20 minutes.",
    history: "Adobo is one of the most famous Filipino dishes, originating from the Spanish colonization. It was a way to preserve meat by marinating it in vinegar and soy sauce.",
    image: "images/adobo.jpg"
  },
  {
    name: "Sinigang na Baboy",
    ingredients: "1 kg Pork Belly, 1 onion, 2 tomatoes, 1 radish (labanos), 1 eggplant, 2 long green peppers, 1 pack Sinigang mix or fresh tamarind, 1 bunch kangkong (water spinach), 1 liter water",
    instructions: "Boil pork belly in a pot of water for 30 minutes. Add onions, tomatoes, radish, eggplant, and green peppers. Add the sinigang mix or fresh tamarind to the pot. Simmer for 10-15 minutes. Add kangkong and cook for an additional 5 minutes.",
    history: "Sinigang is a sour soup, a beloved Filipino comfort food that often uses tamarind as the souring agent. It is said to be influenced by the Indians' use of sour fruits in their cuisine.",
    image: "images/sinigang.jpg"
  },
  {
    name: "Kare-Kare",
    ingredients: "1 kg Oxtail, 1/2 cup peanut butter, 1/2 cup rice flour, 2 tbsp annatto powder (or achuete), 1 bunch banana hearts, 1 bunch string beans, 1 eggplant, 1 onion, 1 tbsp bagoong",
    instructions: "Boil the oxtail until tender (about 1.5 hours). In a separate pan, sauté onions, annatto powder, and peanut butter. Add some of the broth from the oxtail. Add the vegetables (banana hearts, string beans, eggplant) to the oxtail. Simmer for another 10-15 minutes, then serve with bagoong.",
    history: "Kare-Kare is believed to have been influenced by the Indian curry dishes but adapted with peanut butter as its base. It has become a staple in Filipino festivities.",
    image: "images/kare-kare.jpg"
  },
  {
    name: "Lechon Kawali",
    ingredients: "1 kg Pork Belly, 1 tbsp salt, 1 tbsp pepper, 2 bay leaves, 1/4 cup vinegar, 4 cups water",
    instructions: "Boil pork belly in water with bay leaves, vinegar, salt, and pepper for about 40 minutes. Let the pork cool and dry, then deep fry until golden brown and crispy.",
    history: "Lechon Kawali is a Filipino version of roasted pork, but cooked by deep-frying the pork belly. It's a crispy, golden delight that’s usually served with liver sauce.",
    image: "images/lechon-kawali.jpg"
  },
  // Add other dishes here following the same structure...
];
document.querySelectorAll('.play-button').forEach(button => {
  button.addEventListener('click', function () {
    const iframeContainer = this.nextElementSibling;
    const iframe = document.createElement('iframe');
    iframe.src = this.getAttribute('data-video');
    iframeContainer.appendChild(iframe);
    iframeContainer.style.display = 'block'; // Show iframe
  });
});
