import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { IWSOrder } from "../../utils/types";
import { BorderImage } from "../border-image/border-image";
import styles from "./order-preview.module.css";
import {
	getIngredientsIsLoadingSelector,
	getIngredientsSelector
} from "../../redux/features/ingredients/selectors-ingredients";
import {useAppSelector} from "../../redux/store/store";
import {getFullOrderIngridients} from "../../utils/get-ingredients";
import CustomDate from "../custom-date/custom-date";

const rusStatuses = {
	created: <p className="text text_type_main-default">Создан</p>,
	pending: <p className="text text_type_main-default"> Готовиться</p>,
	done: (
		<p className="text text_type_main-default text_color_success">Выполнен</p>
	),
	none: <span></span>,
};

export const OrderPreview: React.FC<{ order: IWSOrder; status?: string }> = ({
	order,
	status = "none",
}) => {
	const isIngredientLoading = useAppSelector(getIngredientsIsLoadingSelector);
	const appIngridients = useAppSelector(getIngredientsSelector);

	if (isIngredientLoading) {
		const fullIngridients = getFullOrderIngridients(
			order.ingredients,
			appIngridients
		);

		const totalPrice = fullIngridients.reduce((prev, cur) => {
			if (!cur) return prev;
			return prev + cur.price;
		}, 0);

		return (
			<li className={styles.globalOrder}>
				<section className={styles.header}>
					<span className="text text_type_digits-default">#{order.number}</span>
					<CustomDate dateString={order.createdAt} />
				</section>
				<section className="text text_type_main-medium">
					<p>{order.name}</p>
					{rusStatuses[status as keyof typeof rusStatuses]}
				</section>
				<section className={styles.footer}>
					<div className={styles.ingridients}>
						{/* 
								реверс нужен для того что бы корректно отображались ингридиенты
								если делать без него и без свойства цсс flex-direction: column-reverse
								то картинки будут накладываться друг на друга в другую сторону
								лучше я не придумал
						*/}
						{[...fullIngridients].reverse().map((i, index) => {
							//                  ^^^^^^^^^
							if (!i) return null;
							return (
								<div key={index} className={styles.ingridient}>
									<BorderImage ingridient={i} />
								</div>
							);
						})}
					</div>
					<div className={styles.price}>
						<span className="text text_type_digits-default">{totalPrice}</span>
						<CurrencyIcon type="primary" />
					</div>
				</section>
			</li>
		);
	}

	return null;
};
