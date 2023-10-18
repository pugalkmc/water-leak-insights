import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve the initial value from localStorage
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to store the current value
  const [value, setValue] = useState(initial);

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
