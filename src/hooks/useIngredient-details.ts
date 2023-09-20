import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  setToolCurrentIngredient,
  unsetCurrentIngredient
} from "../redux/features/currentIngredient/currentIngredientSlice";
import {getCurrentIngredient} from "../redux/features/currentIngredient/current-ingredient-selectors";
import {getIngredientsSelector} from "../redux/features/ingredients/selectors-ingredients";
import {ICart} from "../utils/data-Types";


const useIngredientDetails = (id: string | undefined) => {
  const dispatch = useDispatch()

  const _ingredients:Array<ICart> = useSelector(getIngredientsSelector)//TODO: make sense of ANY

     const data:ICart | undefined = _ingredients?.find((el: { _id: string | undefined; }) => el._id === id,  )

  useEffect(() => {
    data && dispatch(setToolCurrentIngredient(data))

    return ():void => {
      dispatch(unsetCurrentIngredient()) //TODO: make sense of ANY
    }
  }, [dispatch, data])

  return useSelector(getCurrentIngredient);
}


export default useIngredientDetails;
