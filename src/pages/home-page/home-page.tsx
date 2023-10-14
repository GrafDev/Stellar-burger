import { FC } from 'react';
import IngredientsTabs from '../../components/ingredients/ingredients-tabs/Ingredients-tabs';
import style from './home-page.module.css'
import BurgerConstructor from "../../components/constructur/burger-constructor/burger-constructor";

const HomePage: FC = () => {
  return (
    <div className={`${style.home_wrapper}`}>
      <IngredientsTabs />
      <BurgerConstructor />
    </div>
  )
}

export default HomePage;