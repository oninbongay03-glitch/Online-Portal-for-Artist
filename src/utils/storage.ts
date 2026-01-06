// Create
export const setData = <T>(key: string, value: T): void => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(value));
  };
  
// Read
  export const getData = <T>(key: string): T | null => {
    if (typeof window === "undefined") return null;
  
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  

// Update
  export const updateData = <T>(
    key: string,
    updater: (prevData: T | null) => T
  ): void => {
    const prevData = getData<T>(key);
    const newData = updater(prevData);
    setData(key, newData);
  };
  
//Delete
  export const removeData = (key: string): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  };
  

//Clear all data in local storage
  export const clearStorage = (): void => {
    if (typeof window === "undefined") return;
    localStorage.clear();
  };
  