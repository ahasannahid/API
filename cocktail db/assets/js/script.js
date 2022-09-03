const loadCocktail = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayCocktail(data.drinks))
}

const displayCocktail = cocktails => {
//   console.log(cocktails);
const cocktailContainer = document.getElementById('cocktail-container');
  cocktails.forEach(cocktail => {
    console.log(cocktail);
    const cocktailDiv = document.createElement('div');
    cocktailDiv.classList.add('col')
    cocktailDiv.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">Name: ${cocktail.strDrink}</h5>
                <p class="card-text">Instruction: ${cocktail.strInstructions}</p>
            </div>
        </div>
    </div>
    `;
    cocktailContainer.appendChild(cocktailDiv);
  });
}

loadCocktail();