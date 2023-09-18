import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  setToolCurrentIngredient,
  unsetCurrentIngredient
} from "../redux/features/currentIngredient/currentIngredientSlice";
import {getCurrentIngredient} from "../redux/features/currentIngredient/current-ingredient-selectors";
import {getIngredientsSelector} from "../redux/features/ingredients/selectors-ingredients";
import {ICart, IConstructorIngredients} from "../utils/types";



const useIngredientDetails = (id: string | undefined) => {
  const dispatch = useDispatch()

  const _ingredients:Array<ICart> = useSelector(getIngredientsSelector)

  console.log('-----',_ingredients,  '----useIngredientDetails')
     const data:ICart|undefined = _ingredients?.find((el: { _id: any; }) => el._id === id,  )

  useEffect(() => {
    data && dispatch(setToolCurrentIngredient(data))

    return () => {
      dispatch(unsetCurrentIngredient()) //TODO:Today
    }
  }, [dispatch, data])

  const IngredientDetails = useSelector(getCurrentIngredient)

  return IngredientDetails;
}


export default useIngredientDetails;
