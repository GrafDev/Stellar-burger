import { useState, createRef, useMemo, MouseEvent, UIEvent } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredients-tabs.module.css';
import { SET_SELECTED_INGREDIENT } from '../../../types/constants-types/ingredients-types';
import IngredientsCard from '../ingredients-card/ingredients-card';
import { ingredient } from '../../../types/ingredients-types';
import { useSelector, useDispatch } from '../../../hooks/store-hooks';
import {textLarge, textMedium} from "../../../utils/constants/text-style-constants";

const IngredientsTabs = () => {
  const dispatch = useDispatch();
  const { BUN, MAIN, SAUCE } = ingredient
  const { ingredients } = useSelector(state => state.ingredients)
  const [current, setCurrent] = useState<string>(BUN);
  const bunRef = createRef<HTMLHeadingElement>();
  const sauceRef = createRef<HTMLHeadingElement>();
  const mainRef = createRef<HTMLHeadingElement>();

  function handleTabClick(tab: typeof BUN | typeof MAIN | typeof SAUCE) {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  const handleOpen = (event: MouseEvent<HTMLImageElement>) => {
    const clickCardId = event.currentTarget.getAttribute('id');
    dispatch({
      type: SET_SELECTED_INGREDIENT,
      ingredient: (ingredients.find((card) => card._id === clickCardId))
    })
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const sauceContainer = sauceRef.current?.getBoundingClientRect();
    const mainContainer = mainRef.current?.getBoundingClientRect();
    const el = event.target as HTMLDivElement

    if (sauceContainer === undefined || mainContainer === undefined) {
      return null
    }

    el.offsetTop - sauceContainer.top < 0
      ? setCurrent(BUN)
      : el.offsetTop - mainContainer.top < 0
        ? setCurrent(SAUCE)
        : setCurrent(MAIN);
  }

  const tabBuns = useMemo(() => {
    return ingredients.filter((item) => item.type === BUN)
  }, [ingredients, BUN])

  const tabSouse = useMemo(() => {
    return ingredients.filter((item) => item.type === SAUCE)
  }, [ingredients, SAUCE])

  const tabMain = useMemo(() => {
    return ingredients.filter((item) => item.type === MAIN)
  }, [ingredients, MAIN])

  return (
    <>
      <section className={`${style.tabBurgerIngredients__wrapper} pl-5`}>
        <h2 className={`${textLarge} mt-10 mb-5`}>Соберите бургер</h2>
        <nav className={`${style.navMenuIngredients__wrapper} mb-10`}>
          <Tab value={BUN} active={current === BUN} onClick={() => handleTabClick(BUN)}>Булки</Tab>
          <Tab value={SAUCE} active={current === SAUCE} onClick={() => handleTabClick(SAUCE)}>Соусы</Tab>
          <Tab value={MAIN} active={current === MAIN} onClick={() => handleTabClick(MAIN)}>Начинки</Tab>
        </nav>
        <div className={style.tabBurgerIngredients__section} onScroll={handleScroll}>
          <h3 className={textMedium} id={BUN} ref={bunRef}>Булки</h3>
          <ul className={`${style.listIngredients} mt-6 ml-4 mr-4 mb-9`}>
            {tabBuns.map((item) => <IngredientsCard card={item} key={item._id} onOpen={handleOpen} />)}
          </ul>
          <h3 className={textMedium} id={SAUCE} ref={sauceRef}>Соусы</h3>
          <ul className={`${style.listIngredients} mt-6 ml-4 mr-4 mb-9`}>
            {tabSouse.map((item) => <IngredientsCard card={item} key={item._id} onOpen={handleOpen} />)}
          </ul>
          <h3 className={textMedium} id={MAIN} ref={mainRef}>Начинки</h3>
          <ul className={`${style.listIngredients} mt-6 ml-4 mr-4 mb-9`}>
            {tabMain.map((item) => <IngredientsCard card={item} key={item._id} onOpen={handleOpen} />)}
          </ul>
        </div>
      </section>
    </>
  )
};



export default IngredientsTabs;