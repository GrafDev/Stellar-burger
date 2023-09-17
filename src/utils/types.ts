import PropTypes from "prop-types";
import {v4} from "uuid/index";


export const typeCart = {
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_mobile: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			__v:  PropTypes.number.isRequired,
		}



export interface ICart  {
	_id: string
	name: string
	type: 'bun' | 'sauce' | 'main'
	proteins: number
	fat: number
	carbohydrates: number
	calories: number
	price: number
	image: string
	image_mobile: string
	image_large: string
	__v:  number
}

export interface IConstructionCart extends ICart{
	constructorId:string
}

export interface IConstructorState {
	ingredients: {
		pieces: Array<ICart>
		bun: ICart | null
		}
		constructorIngredientsRequest: boolean
	constructorIngredientsFailed: boolean
}