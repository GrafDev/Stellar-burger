import styles from "./construction-cart.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {decreaseConstructor, moveConstructorCart} from "../../../redux/features/constructor/constructorSlice";
import React, {FC, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useDrag, useDrop, XYCoord} from "react-dnd";
import classNames from "classnames";
import sortFunc from "../../../utils/sortFunc";
import {getConstructorPieces} from "../../../redux/features/constructor/constructor-selectors";
import {ICart, IConstructorCart} from "../../../utils/data-Types";


type TProps = {
    elem: IConstructorCart,
    index: number,
}

const ConstructorCart: FC<TProps> = (props:TProps) => {
    const elem: IConstructorCart = props.elem
    const index: number = props.index
    const dispatch = useDispatch();
    const pieces: Array<ICart> = useSelector(getConstructorPieces)
    const constructorRef= useRef<HTMLInputElement>(null); // TODO: Check any
    const _id: string = elem.constructorId

    const [{isDragging}, constructorDrag] = useDrag(({
        type: 'constructorCart',
        item: (): { _id: string, index: number } => {
            return {_id, index}
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    }))
    const [, constructorDrop] = useDrop({
        accept: 'constructorCart',
        hover: (item: TProps, monitor) => {
            if (!constructorRef.current) {
                return;
            }
            const dragIndex: number = item.index;
            const hoverIndex: number = index;
            if (dragIndex === hoverIndex) {
                return;
            } // Determine rectangle on screen
            const hoverBoundingRect:any  = constructorRef.current?.getBoundingClientRect() // TODO: Разобраться с any
            // Get vertical middle
            const hoverMiddleY: number =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset: any  = monitor.getClientOffset() // TODO: Разобраться с any

            // Get pixels to the top
            const hoverClientY: number = clientOffset.y - hoverBoundingRect.top
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

            dispatch(moveConstructorCart(sortFunc(pieces, dragIndex, hoverIndex)))
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