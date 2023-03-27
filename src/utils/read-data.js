
import {GET_INGREDIENTS, GET_INGREDIENTS_ERROR, GET_INGREDIENTS_LOADING} from "../services/action/ingredients-action";
import {useDispatch} from "react-redux";

const DATA = 'https://norma.nomoreparties.space/api/ingredients';

function addCount(data){
	console.log('Count added')
	return data.data.map(elem =>{
		elem.count=0
		return elem
	})
}


const checkResponse = (res)=> {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const dispatch=useDispatch();

function readData() {

	const getData = async () => {
		dispatch({type:GET_INGREDIENTS_LOADING})
		fetch(DATA)
			.then(checkResponse)
			.then(data => {
				dispatch({type:GET_INGREDIENTS, payload:addCount(data)})
			})
			.catch(e => {
				dispatch({type:GET_INGREDIENTS_ERROR})
			});
	};
	getData().then(r => console.log('Loaded'));
}
export default readData;