export default class Services {
    _path = "https://www.thecocktaildb.com/api/json/v1/1";

    getData = async (url) => {
        return fetch(url).then(
            (result) => result.json(),
            (error) => error
        );
    };

    getRandomCocktail = async () => {
        return this.getData(`${this._path}/random.php`).then((res) => this._transformCocktail(res.drinks[0]));
    };

    getCocktailByLetter = async (letter) => {
        return this.getData(`${this._path}/search.php?f=${letter}`).then((res) =>
            res.drinks.map((item) => this._transformCocktail(item))
        );
    };

    getCocktailById(id) {
        return this.getData(`${this._path}/lookup.php?i=${id}`).then((res) =>
            this._transformCocktail(res.drinks[0])
        );
    }

    _transformCocktail(obj) {
        return {
            id: obj.idDrink,
            isAlc: obj.strAlcoholic,
            cat: obj.strCategory,
            name: obj.strDrink,
            img: obj.strDrinkThumb,
            desc: obj.strInstructions,
            ings: Object.entries(obj)
                .filter((item) => item[0].includes("strIngredient") && item[1] !== null)
                .map((item) => item[1]),
        };
    }
}
