import { useEffect } from "react";

type UseClickOutsideProps = {
  ref: React.RefObject<HTMLElement>;
  onClose: () => void;
  enabled?: boolean;
};

export const useClickOutside = ({
    ref,
    onClose,
    enabled = true,
  }: UseClickOutsideProps)  =>{
    useEffect(() => {
      if (!enabled) return;
  
      const handleClick = (event: MouseEvent) => {
        if (!ref.current) return;
  
        if (!ref.current.contains(event.target as Node)) {
          onClose();
        }
      };
  
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [ref, onClose, enabled]);
  }
