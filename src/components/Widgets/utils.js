export const preparedList = (list) => {
    const getDate = (date) => new Date(date).getDate();

    return list.reduce((acc, item) => {
        const date = getDate(item.dt_txt);
        if (date in acc) {
            acc[date].push(item);
        } else {
            acc[date] = [item];
        }
        return acc;
    }, {});
};

export const getMiddleValues = (mapedList) => {
    const middleDayForecast = [];
    Object.values(mapedList).forEach(items => {
        const middleIndex = Math.ceil((items.length - 1) / 2);
        middleDayForecast.push(items[middleIndex]);
    });

    return middleDayForecast;
};