import {FC, MouseEventHandler, useMemo} from 'react';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useDrag} from "react-dnd";
import {Link, useLocation} from 'react-router-dom';
import style from './ingredients-card.module.css';
import {ingredient, ITypeIngredient} from '../../../types/ingredients-types';
import {useSelector} from '../../../hooks/store-hooks';
import {PATH_INGREDIENTS} from "../../../utils/constants/path-constants";
import {activeDefault, digitsDefault} from "../../../utils/constants/text-style-constants";

interface ICardIngredient {
  card: ITypeIngredient,
  onOpen: MouseEventHandler
}

const IngredientsCard: FC<ICardIngredient> = ({ card, onOpen }) => {
  const location = useLocation();
  const { BUN } = ingredient
  const { _id, type, image, name, price } = card;
  const { list, bun } = useSelector(state => state.order)

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredients',
    item: { ...card },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });
  
  const counters = useMemo(() => {
    let ingredientsCount = list.filter((item) => item._id === _id).length;
    return (type === BUN && bun && bun._id === _id ? 2 : type !== BUN && ingredientsCount ? ingredientsCount : null)
  }, [_id, bun, list, type, BUN])


  return (
    <>
      <li className={`${style.cardIngredient__wrapperCard} ${isDrag ? style.isDrag : null}`} ref={dragRef} draggable >
        <Link to={`${PATH_INGREDIENTS}/${_id}`} state={{ background: location }} >
          <img className={`${style.cardIngredient__img} ml-4 mr-4 mb-2`} src={image} alt={name} id={_id} onClick={onOpen} />
        </Link>
        <div className={style.cardIngredient__wrapperPrice} >
          <p className={`${digitsDefault} mb-2`}>{price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <p className={`${style.cardIngredient__name} ${activeDefault} mb-7 `}>{name}</p>

        {counters ? <Counter  count={counters} size="default" /> : null}
      </li >
    </>
  )
};


export default IngredientsCard;