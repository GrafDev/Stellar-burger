import React from "react";
import { IIngridient } from "../../../../react-burger-sprint-5-step-1/src/utils/types";
import styles from "./border-image.module.css";
export const BorderImage: React.FC<{
	ingridient: IIngridient;
}> = ({ ingridient }) => {
	const { _id, image_mobile, name } = ingridient;
	return (
		<img className={styles.image} key={_id} src={image_mobile} alt={name} />
	);
};
