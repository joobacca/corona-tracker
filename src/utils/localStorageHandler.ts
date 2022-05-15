
const storageKey = 'corona-tracking';

const getLS = () => {
  return JSON.parse(localStorage.getItem(storageKey) || '[]');
};

const setLS = <T>(data: T) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { getLS, setLS };