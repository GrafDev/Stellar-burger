const sortFunc = (arr: any[], dragIndex: number, hoverIndex: number): any[] => {
	const newArr = [...arr];
	const item = arr[dragIndex];
	newArr.splice(dragIndex, 1);
	newArr.splice(hoverIndex, 0, item);

	return newArr;
};

export default sortFunc;