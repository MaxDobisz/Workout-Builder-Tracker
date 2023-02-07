export const getDataFromLocalStorage = (key, defaultValue) => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(key));

    if (!dataFromLocalStorage) {
        return defaultValue;
    }

    return dataFromLocalStorage
}