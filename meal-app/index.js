let food = [];

const content = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");
const button = document.getElementById("button");





 async function Meals(typing) {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + typing)
.then((response) => response.json())
.then((data) => (food = data.meals));
}

function MealsChoice() {
  content.innerHTML = food.map((food) => {
   
  


  

  return `
 
  <li class="list">
  <img src=${food.strMealThumb}  class="collection" data-link="${food.strMeal}">
  <h3  class="collection" data-link="${food.strMeal}">${food.strMeal}</h3>
  </li>

  `
  })

  document.querySelectorAll('.collection').forEach(el => {
    el.addEventListener('click', event => {
      loadRecipe(el.dataset.link)

      
    })
  }
  )


  

}

function loadRecipe(address) {
  const contentMeal = document.querySelector('#content_meal')
  contentMeal.style.display = 'block'
  document.querySelector('#content').style.display = 'none'
  

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${address}`)
.then((response) => response.json())
.then((data) => data.meals.forEach(food => {
  food.length = 15;
  let recipes = [];
  for(i = 1; i < 15; i++) {
    food[`strIngredient${i}`]
    let recipe = food[`strIngredient${i}`];
    let element = food[`strMeasure${i}`];
  
    recipes.push(`${recipe} - ${element}`);
  }
  
  contentMeal.innerHTML +=   `<li class="list">
  <img src=${food.strMealThumb}>
  <h3  class="collection" data-link="${food.strMeal}">Meal Name : ${food.strMeal}</h3>
  <h3>
  Native Country : ${food.strArea}</h3>
  <h3> Category : ${food.strCategory}</h3>
  <ul>Ingredients needed : ${recipes}</ul>
  <h3>Cooking Instructions : ${food.strInstructions}</h3>

  <p>How to cook it :</p>
  <a href=${food.strYoutube}><button>Voir la recette
  </button></a>
  
  <!-- vidéo qui affiche une erreur <iframe src=${food.strYoutube}>

</iframe> --> 

 
  <div class="closecollection" onclick="returnMeal()">X</div>
  </li>`


  
}))
}


function returnMeal(){
  document.querySelector('#content_meal').style.display = 'none'
  document.querySelector('#content').style.display = 'block'
  content.innerHTML = food.map((food) => {
   
  


  

    return `
   
    <li class="list">
    <img src=${food.strMealThumb}  class="collection" data-link="${food.strMeal}">
    <h3  class="collection" data-link="${food.strMeal}">${food.strMeal}</h3>
    <h4>${food.strArea}</h4>
  
    </li>
  
    `
    })
  

}




        



search.addEventListener('input', (e) => {
  Meals(e.target.value);
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Meals().then(() => MealsChoice());
});













let drink = [];

const content2 = document.getElementById("content_drink");
const form2 = document.getElementById("form2");
const search2 = document.getElementById("search2");
const button2 = document.getElementById("button2");





 async function Cocktail2(typing) {
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + typing)
.then((response) => response.json())
.then((data) => (drink = data.drinks));

}

function DrinkChoice() {
  content2.innerHTML = drink.map((drink) => {
   
  


  

  return `
 
  <li class="list">
  <img src=${drink.strDrinkThumb}  class="collection2" data-link="${drink.strDrink}">
  <h3  class="collection2" data-link="${drink.strDrink}">${drink.strDrink}</h3>
  </li>

  `
  })

  document.querySelectorAll('.collection2').forEach(el => {
    el.addEventListener('click', event => {
      loadRecipe2(el.dataset.link)

      
    })
  }
  )


  

}

function loadRecipe2(address) {
  const contentDrink = document.querySelector('#content_ingredient')
  contentDrink.style.display = 'block'
  document.querySelector('#content_drink').style.display = 'none'
  

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${address}`)
.then((response) => response.json())
.then((data) => data.drinks.forEach(drink=> {
  drink.length = 15;
  let recipes2 = [];
  for(i = 1; i < 5; i++) {
    drink[`strIngredient${i}`]
    let recipe2 = drink[`strIngredient${i}`];
    let element2 = drink[`strMeasure${i}`];
  
    recipes2.push(`${recipe2} - ${element2}`);
  }
  
  contentDrink.innerHTML +=   `<li class="list">
  <img src=${drink.strDrinkThumb}>
  <h3  class="collection" data-link="${drink.strDrink}">Cocktail Name : ${drink.strDrink}</h3>
  <h3>Cocktail Category : ${drink.strCategory}</h3>
  <ul>Ingredients neeeded : ${recipes2}</ul>
  <h3>Composition Instructions : ${drink.strInstructions}</h3>
  
  <span>The drink is :</span>
  <h3>${drink.strAlcoholic}</h3>



 
  <div class="closecollection2" onclick="returnDrink()">X</div>
  </li>`


  
}))
}


function returnDrink(){
  document.querySelector('#content_ingredient').style.display = 'none'
  document.querySelector('#content_drink').style.display = 'block'
  content2.innerHTML = drink.map((drink) => {
   
  


  

    return `
   
    <li class="list">
    <img src=${drink.strDrinkThumb}  class="collection" data-link="${drink.strDrink}">
    <h3  class="collection" data-link="${drink.strDrink}">${drink.strDrink}</h3>
    <h4>${drink.strArea}</h4>
  
    </li>
  
    `
    })
  

}




        



search2.addEventListener('input', (e) => {
  Cocktail2(e.target.value);
})

form2.addEventListener('submit', (e) => {
  e.preventDefault();
  Cocktail2().then(() => DrinkChoice());
});






