import React from "react";
import {customMesageDays} from "../../utils/get-day";

const CustomDate: React.FC<{ dateString: string }> = ({
	dateString,
}) => {
	const date = new Date(dateString);
	const dateNow = new Date();
	const daysPast = Math.round(
		(dateNow.valueOf() - date.valueOf()) / 1000 / 3600 / 24
	);

	const hours = date.getHours();

	const minutesWithoutZero = date.getMinutes();

	const minutes =
		minutesWithoutZero < 10
			? "0" + minutesWithoutZero.toString()
			: minutesWithoutZero.toString();

	return (
		<p className="text text_color_inactive">
			{customMesageDays(daysPast)}, {hours}:{minutes}
		</p>
	);
};

export default CustomDate;