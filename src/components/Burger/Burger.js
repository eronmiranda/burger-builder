import React from 'react';
import BurgerIngredient from './BurgerIngredient';

function Burger() {
	return (
		<div>
			<BurgerIngredient type="bread-top" />
			<BurgerIngredient type="cheese" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default Burger;
