const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';



const getResponse=(res)=>{
	if (res.ok){
		let resJson=res.json();
		// console.log(resJson,'-res.ok')
		return resJson;
	}
	return Promise.reject(`Error ${res.status}`);
}

export const getData = async () => {
	return fetch(DATA_URL).then(getResponse);
}