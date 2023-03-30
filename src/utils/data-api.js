const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';



const getResponse=(res)=>{
	if (res.ok){
		console.log(res.json(),'-res.ok')

		return res.json();
	}
	return Promise.reject(`Error ${res.status}`);
}

export const getData = async () => {
	return fetch(DATA_URL).then(getResponse);
}