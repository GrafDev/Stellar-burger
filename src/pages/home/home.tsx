import { FC } from 'react';
import IngredientsTabs from '../../components/ingredients/ingredients-tabs/Ingredients-tabs';
import BurgerConstructor from '../../components/constructur/burger-constructor/burger-constructor';
import style from './home.module.css'

const Home: FC = () => {
  return (
    <div className={`${style.home_wrapper}`}>
      <IngredientsTabs />
      <BurgerConstructor />
    </div>
  )
}

export default Home;