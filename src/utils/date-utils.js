export const getDate = (date) => new Date(date).getDate();

export const getDay = (date) => {
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    return days[new Date(date).getDay()];
};

export const getCurrentDayAndMonth = () => {
    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];
    const currentDate = new Date();

    return `${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
};