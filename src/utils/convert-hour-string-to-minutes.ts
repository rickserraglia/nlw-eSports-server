export const convertHourStringToMinutes = (hourString: string) => {
	const [hours, minutes] = hourString.split(':').map(Number);

	const minutesAmount = 60 * hours + minutes;

	return minutesAmount;
};
