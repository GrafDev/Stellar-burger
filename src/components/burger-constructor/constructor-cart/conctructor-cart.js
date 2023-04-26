import styles from "./construction-cart.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {decreaseConstructor, moveConstructorCart} from "../../../features/constructor/constructorSlice";
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import classNames from "classnames";
import sortFunc from "../../../utils/sortFunc";


const ConstructorCart = ({elem, index}) => {
	const dispatch = useDispatch();
	const pieces=useSelector(state=>state.constructorStore.ingredients.pieces)
	const constructorRef = useRef(null);
	const _id = elem.constructorId

	const [{isDragging}, constructorDrag] = useDrag(({
		type: 'constructorCart',
		item: () => {
			return {_id, index}
		},
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	}))
	const [, constructorDrop] = useDrop({
		accept: 'constructorCart',
		hover: (item, monitor) => {
			if (!constructorRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
				return;
			} // Determine rectangle on screen
			const hoverBoundingRect = constructorRef.current?.getBoundingClientRect()
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			// Determine mouse position
			const clientOffset = monitor.getClientOffset()
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}

			dispatch(moveConstructorCart(sortFunc(pieces,dragIndex,hoverIndex)))
			item.index = hoverIndex
		}

	})
	constructorDrag((constructorDrop(constructorRef)))

	return (
		<div className={classNames(
			isDragging ? styles.isDragging : styles.piece
		)} ref={constructorRef}>
			<DragIcon type="primary"/>
			<ConstructorElement
				text={elem.name}
				price={elem.price}
				isLocked={false}
				thumbnail={elem.image_mobile}
				handleClose={() => {
					dispatch(decreaseConstructor(elem.constructorId))
				}}
			/>
		</div>
	)
}

export default ConstructorCart;