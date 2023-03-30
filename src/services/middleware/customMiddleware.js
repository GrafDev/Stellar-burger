export const customMiddleware=()=>{
	return(store)=>{
		return (next)=>(action)=>{
			// console.log('1',store)
			// console.log('2',action)
			// console.log('3',next)
			return next(action);
		}
	}
}