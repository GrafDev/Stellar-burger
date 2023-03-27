import React from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-parts.module.css"
import PropTypes from "prop-types";

function ConstructorParts(props){
	const elem=props.piece;
	const type=props.type
	const getText=(type,name)=>{
		if (type==='top'){ return `${name} (верх)`}
		else if(type==='bottom') {return `${name} (низ)`}
		else return name
		}


	return(
		<div className={styles.box}>
			{type===''? <div className={styles.icon}><DragIcon  type="primary" /></div>:<div className={styles.zero}></div>}
			<ConstructorElement
				text={getText(type,elem.name)}
				type={type}
				price={elem.price}
				isLocked={type!==''}
				thumbnail={elem.image_mobile}
			/>
		</div>
	)
}

ConstructorParts.propTypes={
	type:PropTypes.oneOf(['top', 'bottom', '']).isRequired,
}
export default ConstructorParts;