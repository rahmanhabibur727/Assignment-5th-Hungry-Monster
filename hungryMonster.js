const searchMeal = () => {
    const strCategory = document.getElementById("search-box").value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
        <img src=${meal.strMealThumb} class="meal-image" onclick ="mealDetails('${meal.idMeal}')">
        <h3 class ="meal-strCategory">${meal.strMeal}</h3>
    `
     mealsDiv.appendChild(mealDiv);
    });
}

const mealDetails = idMeal => {
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals[0]));
}

const displayMealInfo = meal => {
    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML = `
        <image src= "${meal.strMealThumb}" class ="meal-image">
        <h4 class ='meals-strCategory'>${meal.strMeal}</h4>
                <h4>FoodType:- ${meal.strArea}</h4>
        <h5>Ingredients:-</h5>
        <p>1:${meal.strIngredient1}</p>
        <p>2:${meal.strIngredient2}</p>
        <p>3:${meal.strIngredient3}</p>
        <p>4:${meal.strIngredient4}</p>
        <p>5:${meal.strIngredient5}</p>
        <p>6:${meal.strIngredient6}</p>
        <p>7:${meal.strIngredient7}</p>
        <p>8:${meal.strIngredient8}</p>
        <p>9:${meal.strIngredient9}</p>
        <p>10:${meal.strIngredient10}</p>
       

`
}

