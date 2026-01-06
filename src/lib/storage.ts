export const storage = {
    get<T>(key: string): T | null {
      if (typeof window === "undefined") return null;
  
      try {
        const value = localStorage.getItem(key);
        return value ? (JSON.parse(value) as T) : null;
      } catch (error) {
        console.error("localStorage get error:", error);
        return null;
      }
    },
  
    set<T>(key: string, value: T) {
      if (typeof window === "undefined") return;
  
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("localStorage set error:", error);
      }
    },
  
    remove(key: string) {
      if (typeof window === "undefined") return;
  
      localStorage.removeItem(key);
    },
  };
  