import PropTypes from 'prop-types';
import React from 'react';
import classes from './BurgerIngredient.module.css';

function BurgerIngredients(props) {
	let ingredient = null;

	switch (props.type) {
		case 'bread-bottom':
			ingredient = <div className="BreadBottom"></div>;
			break;
		case 'bread-top':
			ingredient = (
				<div className="BreadTop">
					<div className="Seeds1"></div>
					<div className="Seeds2"></div>
				</div>
			);
			break;
		case 'meat':
			ingredient = <div className="classes.Meat"></div>;
			break;
		case 'cheese':
			ingredient = <div className="classes.Cheese"></div>;
			break;
		case 'bacon':
			ingredient = <div className="classes.Bacon"></div>;
			break;
		case 'salad':
			ingredient = <div className="classes.Salad"></div>;
			break;
		default:
			ingredient = null;
	}
	return ingredient;
}

BurgerIngredients.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
