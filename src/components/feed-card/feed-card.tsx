import {FormattedDate, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {FC, useMemo} from 'react';
import {useLocation} from "react-router-dom";
import style from './feed-card.module.css';
import {IOrderType} from '../../types/ingredients-types';
import {useSelector} from '../../hooks/store-hooks';
import {PATH_PROFILE_ORDERS} from "../../utils/constants/path-constants";
import {
    activeDefault, colorInactive,
    colorSuccess,
    digitsDefault,
    digitsMedium,
    textMedium
} from "../../utils/constants/text-style-constants";

interface IFeedCard {
    data: IOrderType,
    profileStatus: boolean
}

const FeedCard: FC<IFeedCard> = ({data, profileStatus}) => {
    const location = useLocation();
    const {ingredients} = useSelector(store => store.ingredients);

    const {name, number, createdAt} = data;
    const orderIdList = data.ingredients;

    const listOrderedIngredients = orderIdList.map(item => {
        return ingredients.find(el => el._id === item)
    });

    const totalPrice = useMemo(() => {
        return (
            listOrderedIngredients.reduce((sum, item) => (item === undefined ? 0 : sum + item.price), 0)
        )
    }, [listOrderedIngredients])

    const counterIngredient = useMemo(() => {
        const listOrderedLength = listOrderedIngredients.length
        return (
            listOrderedLength > 6 ? listOrderedLength - 6 : null
        )
    }, [listOrderedIngredients])

    const statusOrder =
        (data.status === 'created') ? (<p className={`${activeDefault} mt-2`}>Создан</p>) :
            (data.status === 'pending') ? (<p className={`${activeDefault} mt-2`}>Готовится</p>) :
                (data.status === 'done') ? (<p className={`${activeDefault} ${colorSuccess} mt-2`}>Выполнен</p>) : null

    return (
        <li className={location.pathname === String(PATH_PROFILE_ORDERS) ? `${style.section__profile}` : `${style.section}`}>
            <div className={`${style.block} mt-6 mb-6`}>
                <p className={`${style.number} ${digitsDefault}`}>#{number}</p>
                <p className={`${style.data} ${activeDefault} ${colorInactive}`}><FormattedDate
                    date={new Date(createdAt)}/> i-GMT+3</p>
            </div>
            <h3 className={`${style.name} ${textMedium}`}>{name}</h3>
            {profileStatus ? (statusOrder) : null}
            <div className={`${style.block} mb-6 mt-6`}>
                <ul className={`${style.block__card}`}>
                    {listOrderedIngredients.slice(0, 6).map((item, index) => {
                        return (<li key={index} className={`${style.card}`} style={{zIndex: 6 - index}}><img
                            src={item?.image_mobile} className={style.card__img} alt={item?.name}/></li>)
                    })}
                    {(counterIngredient) ? (
                        <div className={`${style.card__count} ${digitsMedium}`}>+{counterIngredient}</div>) : null}
                </ul>
                <div className={`${style.block__price} ml-6`}>
                    <span className={`${style.price__count} ${digitsMedium}`}>{totalPrice}</span>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </li>
    )
}

export default FeedCard