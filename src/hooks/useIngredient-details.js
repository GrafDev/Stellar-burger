import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  setToolCurrentIngredient,
  unsetCurrentIngredient
} from "../redux/features/currentIngredient/currentIngredientSlice";
import {getCurrentIngredient} from "../redux/features/currentIngredient/current-ingredient-selectors";
import {getIngredientsSelector} from "../redux/features/ingredients/selectors-ingredients";

// Redux

const useIngredientDetails = (id) => {
  const dispatch = useDispatch()

  // Searching ingredient in Ingredient storage
  const _ingredients = useSelector(getIngredientsSelector)
  console.log('-----',_ingredients,  '----useIngredientDetails')
     const data = _ingredients?.find(el => el._id === id,  )

  useEffect(() => {
    data && dispatch(setToolCurrentIngredient(data))

    return () => {
      dispatch(unsetCurrentIngredient())
    }
  }, [dispatch, data])

  const IngredientDetails = useSelector(getCurrentIngredient)

  return IngredientDetails;
}

export default useIngredientDetails;
