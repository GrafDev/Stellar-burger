const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
	return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

//
// const getResponse=(res)=>{
// 	if (res.ok){
// 		console.log(res.json(),'-res.ok')
//
// 		return res.json();
// 	}
// 	return Promise.reject(`Error ${res.status}`);
// }

export const getData = async () => {
	return fetch(DATA_URL).then(checkResponse);
}