import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient';

function Burger({ ingredients }) {
	let transformedIngredients = Object.keys(ingredients)
		.map((ingredientKey) => {
			return [...Array(ingredients[ingredientKey])].map((_, i) => {
				return (
					<BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
				);
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please start adding ingredients!</p>;
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default Burger;
