export const customMesageDays = (_days: number): string => {
    if (_days === 0) return "Today";
    if (_days === 1) return "Yesterday";

    let _message = "days";
    let copyDays = _days;
    copyDays %= 100;
    if (copyDays >= 2 && copyDays <= 20) {
        _message = "days";
    }
    copyDays %= 10;
    if (copyDays === 1) {
        _message = "day";
    }
    return `${_days} ${_message} ago`;
};