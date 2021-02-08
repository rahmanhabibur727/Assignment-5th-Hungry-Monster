const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function () {
    const searchBox = document.getElementById('search-box');

})



fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => displayMeals(data.categories));

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        const mealInfo = `
        <img src=${meal.strCategoryThumb} class="meal-image" onclick ="mealDetails('${meal.strCategory}')">
        <h3 class ="meal-strCategory">${meal.strCategory}</h3>
    `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}


const mealDetails = strCategory => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${strCategory}`)

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals[0]));
}
const displayMealInfo = meal => {

    const mealDiv = document.getElementById('meal-detail');
    mealDiv.innerHTML = `
        <image src= "${meal.strMealThumb}" class ="meal-image">
        <h4 class ='meals-strCategory'>${meal.strCategory}</h4>
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
        <button onclick="displayMeals(meal)" >Back</button>

`
}







// const searchButton = document.getElementById('search-Button');
//     searchButton.addEventListener("click", function(){
//         const mealInformation = document.getElementById('meal-information');
//         mealInformation.style.display ="block"
//     })


    // const displayFoods = meals =>{
    //     const mealsDiv = document.getElementById('meals');
    //     for (let i = 0; i < meals.length; i++) {
    //         const meal = meals[i];
    //         const mealDiv = document.createElement('div');
    //         mealDiv.className = 'meal';
    //         const mealInfo = `
    //         <h3 class ="meal-strIngredient">${meal.strIngredient}</h3>
    //     `
    //     mealDiv.innerHTML = mealInfo;
    //     mealsDiv.appendChild(mealDiv);


    //  const li = document.createElement('li');
    //  li.innerText = meal.idIngredient;
    //  mealDiv.appendChild(li);
    //  const name = document.createElement('h3');
    //  name.innerText = meal.strIngredient;
    //  mealDiv.appendChild(name);
    //  mealsDiv.appendChild(mealDiv);



// }
// }