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


function readData(state, setState) {
	const getData = async () => {
		setState({...state, hasError: false, isLoading: true});
		fetch(DATA)
			.then(checkResponse)
			.then(data => {
				setState({...state, data: addCount(data), isLoading: false})
			})
			.catch(e => {
				setState({...state, hasError: true, isLoading: false});
			});
	};
	getData().then(r => console.log('Loaded'));
}
export default readData;